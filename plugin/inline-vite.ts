import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { PluginOption } from 'vite';

interface InlinePluginOptions {
  filter?: RegExp;
  namespace?: string;
  transform?: (contents: string, context: { path: string }) => Promise<string>;
}

export default function inlinePlugin(options: InlinePluginOptions = {}): PluginOption {
  const {
    // Match imports starting with "inline:" by default.
    filter = /^inline:/,
    // A unique namespace (here used to tag our virtual module ids).
    namespace = `_${Math.random().toString(36).substr(2, 9)}`,
    // A transform function that can modify the file content.
    transform = async (contents) => contents,
  } = options;

  // We'll capture alias information from the resolved Vite config.
  let aliases: { find: string | RegExp; replacement: string }[] = [];

  return {
    name: 'vite-inline-plugin',
    // Run this plugin before Vite’s built-in CSS handling.
    enforce: 'pre',
    configResolved(config) {
      // Vite alias configuration is available via config.resolve.alias.
      aliases = config.resolve.alias || [];
    },
    async resolveId(source, importer) {
      // Only handle ids that match our filter.
      if (!filter.test(source)) return null;

      let inputPath = source;

      // Process aliases from Vite config.
      if (Array.isArray(aliases)) {
        for (const alias of aliases) {
          // Each alias can be an object with `find` and `replacement`.
          if (typeof alias === 'object' && alias.find && alias.replacement) {
            if (typeof alias.find === 'string') {
              inputPath = inputPath.replace(alias.find, alias.replacement);
            } else if (alias.find instanceof RegExp) {
              inputPath = inputPath.replace(alias.find, alias.replacement);
            }
          }
        }
      }

      // Determine the directory of the importer (or use cwd if none).
      const importerDir = importer ? path.dirname(importer) : process.cwd();
      let filePath = path.resolve(importerDir, inputPath);

      // Check if the file exists; if not, try stripping the inline prefix.
      try {
        await fs.access(filePath);
      } catch {
        filePath = path.resolve(importerDir, inputPath.replace(filter, ''));
      }

      // Return a virtual module id with our namespace.
      return `\0${namespace}:${filePath}?inline`;
    },
    async load(id) {
      const prefix = `\0${namespace}:`;
      if (!id.startsWith(prefix)) return null;

      // Remove our prefix and query parameter.
      const filePath = id.slice(prefix.length).replace(/\?inline$/, '');
      let contents = await fs.readFile(filePath, 'utf8');

      // Optionally transform the content.
      if (typeof transform === 'function') {
        contents = await transform(contents, { path: filePath });
      }

      // Return an ES module that exports the content as a string.
      return contents;
    },
  };
}

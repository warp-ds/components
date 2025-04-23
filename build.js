import esbuild from 'esbuild';
import inlineImportPlugin from 'esbuild-plugin-inline-import';
import { glob } from 'glob';

const components = glob.sync('src/**/index.ts');
const reactComponents = glob.sync('react/**/index.ts');

const esbuildDefaults = {
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'es2020',
  minify: false,
  plugins: [
    // Always include this plugin before others
    inlineImportPlugin(),
  ],
  //external: ["lit", "@warp-ds/elements-core"],
};

function buildComponents(outDir, extraBuildOptions = {}) {
  console.log('Building elements: ');
  components.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/packages/${match[1]}/index.js`,
        external: ['lit', '@lingui/core'],
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
    } catch (err) {
      console.error(err);
    }
  });
}

function buildReactComponents(outDir, extraBuildOptions = {}) {
  console.log('Building react: ');
  reactComponents.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/react/${match[1]}/index.js`,
        external: ['react', 'lit', '@lit/react', 'date-fns', '@warp-ds/react', '@lingui/core'],
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
    } catch (err) {
      console.error(err);
    }
  });
}

buildComponents('dist');
buildReactComponents('dist');

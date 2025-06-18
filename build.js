import fs from 'node:fs';
import esbuild from 'esbuild';
import inlineImportPlugin from 'esbuild-plugin-inline-import';
import { glob } from 'glob';
import ts from 'typescript';

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
  components.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);
    console.log(`lit: building ${match[1]}.js`);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/packages/${match[1]}/index.js`,
        external: ['lit', '@lingui/core'],
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
      generateTypeDefinitions(item, match[1], `${outDir}/packages/${match[1]}/`);
    } catch (err) {
      console.error(err);
    }
  });
}

function buildReactComponents(outDir, extraBuildOptions = {}) {
  reactComponents.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);
    console.log(`react: building ${match[1]}.js`);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/react/${match[1]}/index.js`,
        external: ['react', 'lit', '@lit/react', 'date-fns', '@warp-ds/react', '@lingui/core'],
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
      generateTypeDefinitions(item, match[1], `${outDir}/react/${match[1]}/`, `${outDir}/react/${match[1]}/index.d.ts`);
    } catch (err) {
      console.error(err);
    }
  });
}

function generateTypeDefinitions(inputFilePath, packageName, outDir, outfile = null) {
  const listOfTsFiles = [];
  const options = {
    module: ts.ModuleKind.NodeNext,
    lib: ['DOM', 'ES2020'],
    target: ts.ScriptTarget.ES2020,
    sourceMap: true,
    strict: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    jsx: ts.JsxEmit.React,
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    esModuleInterop: true,
    skipLibCheck: true,
    allowSyntheticDefaultImports: true,
    strictNullChecks: true,
    outDir: outDir,
  };
  if (outfile) {
    options.outFile = outfile;
  }
  const host = ts.createCompilerHost(options);
  host.writeFile = (fileName, contents) => listOfTsFiles.push({ fileName, contents });

  // Create a program using the parsed source file
  const program = ts.createProgram([inputFilePath], options, host);

  // Emit the generated type definitions in memory
  program.emit();

  // Write the generated type definitions to the output file
  listOfTsFiles.forEach((file) => {
    // Doing this hack since typescript sometimes doesn't output the correct path
    const packageTypePath = file.fileName.replace(outDir, '').replace('src/', '').replace(`${packageName}/`, '');
    const updatedFilename = outDir + packageTypePath;

    fs.mkdirSync(updatedFilename.split('/').slice(0, -1).join('/'), { recursive: true });
    fs.writeFileSync(updatedFilename, file.contents);
  });
}

buildComponents('dist');
buildReactComponents('dist');

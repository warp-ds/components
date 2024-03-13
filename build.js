import esbuild from "esbuild";
import { glob } from "glob";
import { sassPlugin } from 'esbuild-sass-plugin';

const components = glob.sync("src/**/index.js");
const reactComponents = glob.sync("react/**/index.js");

const esbuildDefaults = {
  bundle: true,
  format: "esm",
  sourcemap: true,
  target: "es2020",
  minify: false,
  plugins: [sassPlugin({ type: "lit-css", quietDeps: true, })],
  //external: ["lit", "@warp-ds/elements-core"],
};

function buildComponents(outDir, extraBuildOptions = {}) {
  components.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/packages/${match[1]}/index.js`,
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
    } catch (err) {
      console.error(err);
    }
  });
}

function buildReactComponents(outDir, extraBuildOptions = {}) {
  reactComponents.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/react/${match[1]}/index.js`,
        external: ["react", "lit"],
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
    } catch (err) {
      console.error(err);
    }
  });
}

console.log("Building elements: ");

buildComponents("dist");
buildReactComponents("dist");

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.ts", // Entry point of your library
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs", // CommonJS format
      sourcemap: true,
    },
    {
      file: "dist/bundle.mjs",
      format: "es", // ES Module format
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies from the bundle
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript(), // Handle TypeScript files
    postcss({
      plugins: [
        require("postcss-import"),
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
      ],
      extract: false, // Extract CSS to separate file
      minimize: true, // Minimize CSS
    }), // Process CSS files
    terser(), // Minify output
    image(), // Handling image import
    svgr(), // import SVG as React components.
  ],
  external: ["react", "react-dom"], // Specify external dependencies
};

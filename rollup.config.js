import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts', // Entry point of your library
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs', // CommonJS format
      sourcemap: true,
    },
    {
      file: 'dist/bundle.mjs',
      format: 'es', // ES Module format
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies from the bundle
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript(), // Handle TypeScript files
    postcss(), // Process CSS files
    terser(), // Minify output
  ],
  external: ['react', 'react-dom'], // Specify external dependencies
};
import { build } from "esbuild";

/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
  entryPoints: ['./src/server/main.ts'],
  bundle: true,
  target: 'es2020',
  outfile: './dist/server/main.js',
  minify: false,
  minifyIdentifiers: false,
  logLevel: 'info',
  format: "iife"
};

build(buildOptions);
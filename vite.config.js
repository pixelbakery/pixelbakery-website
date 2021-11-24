// vite.config.js

import { build } from "esbuild";

/**
 * @type {import('vite').UserConfig}
 */

// import babel from 'babel'
export default {
  plugins: [],
  build: {
    manifest: true,
  },
  server: {
    host: true,
  },
};

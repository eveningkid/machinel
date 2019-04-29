const commonjs = require('rollup-plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');
const resolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: 'src/index.js',
  plugins: [
    builtins(),
    resolve(),
    commonjs(),
  ],
  output: {
    format: 'umd',
    file: 'dist/bundle.js',
    name: 'machinel',
    exports: 'named',
    globals: {
      crypto: 'crypto',
      fs: 'fs',
      path: 'path',
    },
  },
};

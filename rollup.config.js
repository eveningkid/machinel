const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    commonjs()
  ],
  output: {
    format: 'umd',
    file: 'dist/bundle.js',
    name: 'machinel',
    exports: 'named',
  },
};


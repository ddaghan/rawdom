
export default {
  entry: './jsdist/rawdom.js',
  moduleName: 'window',
  sourceMap: false,
  targets: [
    { dest: 'dist/rawdom.amd.js', format: 'amd' },
    { dest: 'dist/rawdom.cjs.js', format: 'cjs' },
    { dest: 'dist/rawdom.iife.js', format: 'iife' },
    { dest: 'dist/rawdom.umd.js', format: 'umd' },
  ]
};
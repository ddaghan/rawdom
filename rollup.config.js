import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/rawdom.js',
  moduleName: 'window',
  sourceMap: true,
  plugins: [
      uglify()
  ],
  targets: [
    { dest: 'rawdom.amd.js', format: 'amd' },
    { dest: 'rawdom.cjs.js', format: 'cjs' },
    { dest: 'rawdom.iife.js', format: 'iife' },
    { dest: 'rawdom.umd.js', format: 'umd' },
  ]
};
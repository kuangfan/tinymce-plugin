import terser from '@rollup/plugin-terser'

export default {
  input: './plugin.js',
  output: [
    {
      file: './dist/plugin.js',
      format: 'cjs'
    },
    {
      file: './dist/plugin.min.js',
      format: 'iife',
      name: 'example',
      plugins: [terser()]
    }
  ]
}

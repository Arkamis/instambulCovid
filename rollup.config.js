/* eslint-env node */

import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import externals from 'rollup-plugin-node-externals'
import del from 'rollup-plugin-delete'
import pkg from './package.json'

export default [
  {
    input: './src/index.tsx',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      externals({ deps: true }),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
]

import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
// import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

export default [
  {
    external: ['react', 'react-dom', 'prop-types', 'styled-components'],
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      svgr(),
      peerDepsExternal(),
      resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', ['@babel/preset-react', { runtime: 'automatic' }]],
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
  // {
  //   input: 'dist/dist/src/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  //   plugins: [dts()],
  // },
];

import PeerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts"
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/hook.ts",
    output: [{ file: "dist/index.js" }],
    plugins: [
      PeerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json", declaration: false }),
      terser()
    ],
    external: ["react"],
  },
  {
    input: "dist/hook.d.ts",
    output: [{file: "dist/index.d.ts"}],
    plugins: [dts()]
  }
]
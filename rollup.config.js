import PeerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts"

const PJ = require("./package.json")

export default [
  {
    input: "src/hook.ts",
    output: [{ file: PJ.module, format: "esm" }],
    plugins: [
      PeerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json", declaration: false })
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/hook.d.ts",
    output: [{file: "dist/index.d.ts", format: "esm"}],
    plugins: [dts()]
  }
]
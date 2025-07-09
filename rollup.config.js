import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/components/icons/index.js",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
    commonjs(),
  ],
};

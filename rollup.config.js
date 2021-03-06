import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "docs/bundle.js",
    format: "iife"
  },
  plugins: [resolve(), terser()]
};

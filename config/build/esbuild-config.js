const path = require("path")

const MODES = {
  dev: "development",
  prod: "production",
}

const mode = process.env.MODE || MODES.dev;

const isDev = mode === MODES.dev;
const isProd = mode === MODES.prod;

module.exports = {
  outdir: path.resolve(__dirname, "..", "..", "dist"),
  entryPoints: [path.resolve(__dirname, "..", "..", "src", "index.jsx")],
  entryNames: "bundle",
  bundle: true,
  minify: isProd,
  sourcemap: isDev,
}

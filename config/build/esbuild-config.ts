import { BuildOptions } from "esbuild";
import { Utils } from "../helper";
import cleaner from "./plugins/cleaner";
import HTMLPlugin from "./plugins/HTMLPlugin";

const MODES = {
  dev: "development",
  prod: "production",
}

const mode = process.env.MODE || MODES.dev;

const isDev = mode === MODES.dev;
const isProd = mode === MODES.prod;

const config: BuildOptions = {
  outdir: Utils.resolveRoot("dist"),
  entryPoints: [Utils.resolveRoot("src", "index.tsx")],
  entryNames: "[dir]/bundle.[name]-[hash]",
  allowOverwrite: true,
  bundle: true,
  tsconfig: Utils.resolveRoot("tsconfig.json"),
  metafile: true,
  loader: {
    ".jpg": "file",
    ".png": "file",
    ".svg": "file",
  },
  minify: isProd,
  sourcemap: isDev,
  plugins: [
    cleaner, 
    HTMLPlugin({
      title: "ESBuild template",
    })
  ],
}

export default config
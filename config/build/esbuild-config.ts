import { BuildOptions } from "esbuild";
import Utils from "../helper";

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
  entryNames: "bundle",
  bundle: true,
  tsconfig: Utils.resolveRoot("tsconfig.json"),
  loader: {
    ".jpg": "file",
    ".png": "file",
    ".svg": "file",
  },
  minify: isProd,
  sourcemap: isDev,
}

export default config
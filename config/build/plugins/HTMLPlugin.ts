import * as esbuild from 'esbuild';
import { rm, writeFile } from "fs/promises";
import path from "path";
import { IHTMLPluginOptions, Utils } from '../../helper';

const HTMLPlugin: (options: IHTMLPluginOptions) => esbuild.Plugin = (options: IHTMLPluginOptions) => {
  return {
    name: 'HTMLPlugin',
  setup(build) {
    const outDir = build.initialOptions.outdir
    build.onStart( async () => {
      try {
        if (outDir) {
          await rm(outDir, { recursive: true })
        }
      } catch(err) {
        console.log("Cleaning DIST has failed...")
      }
    })
    build.onEnd( async (result) => {
      const outPuts = result.metafile?.outputs;
      const [jsPath, cssPath] = Utils.preparePaths(Object.keys(outPuts || {}));
      const _options = { ...options, jsPath, cssPath }
      if (outDir) {
        await writeFile(
          path.resolve(outDir, "index.html"),
          Utils.renderHTML(_options),
        )
      }
    })
  },
  }
  
}

export default HTMLPlugin
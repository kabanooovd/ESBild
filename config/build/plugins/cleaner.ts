import * as esbuild from 'esbuild';
import { rm } from "fs/promises";

let cleaner: esbuild.Plugin = {
  name: 'cleaner',
  setup(build) {
    build.onStart( async () => {
      try {
        const outDir = build.initialOptions.outdir
        if (outDir) {
          await rm(outDir, { recursive: true })
        }
      } catch(err) {
        console.log("Cleaning DIST has failed...")
      }
    })
  },
}

export default cleaner
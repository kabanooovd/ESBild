const ESBuild = require("esbuild")
const config = require("./esbuild-config.js")

const PORT = process.env.PORT || 3000;

ESBuild.serve({
  servedir: config.outdir,
  port: PORT,
}, { ...config})
.then(() => console.log(`app started on http://localhost:${PORT} port`))
.catch(err => console.log("ERROR ==> Some error has occured...", err))

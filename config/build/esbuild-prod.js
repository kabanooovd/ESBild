const ESBuild = require("esbuild")
const path = require("path")
const config = require("./esbuild-config.js")

ESBuild.build(config)
.catch(err => console.log("ERROR ==> Some error has occured...", err))

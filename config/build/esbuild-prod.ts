import ESBuild from "esbuild"
import config from "./esbuild-config"

ESBuild.build(config)
.catch(err => console.log("ERROR ==> Some error has occured...", err))

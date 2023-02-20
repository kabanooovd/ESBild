import ESBuild from "esbuild";
import path from "path";
import config from "./esbuild-config";
import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`app started on http://localhost:${PORT} port`)
})

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")))

ESBuild.build(config)
.then(result => {
  // console.log("*** ", result )
})
.catch(err => console.log("ERROR ==> Some error has occured...", err))

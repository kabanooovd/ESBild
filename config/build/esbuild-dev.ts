import ESBuild from "esbuild";
import path from "path";
import config from "./esbuild-config";
import express from "express";
import { EventEmitter } from "events";

const PORT = process.env.PORT || 3000;

const app = express();

const emitter = new EventEmitter();

app.get("/subscribe", (req, res) => {
  const headers = {
    "Content-type": "text/event-stream",
    "Connection": "keep-alive",
    "Cache-Control": "no-cache"
  };
  res.writeHead(200, headers);
  res.write("");
  emitter.on("refresh", () => {
    res.write("data: message \n\n")
  })
})

function sendMSG() {
  emitter.emit("refresh", "123123777")
}

app.listen(PORT, () => {
  console.log(`app started on http://localhost:${PORT} port`)
})

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")))

ESBuild.build({ 
  ...config,
  watch: {
    onRebuild(err, result) {
      if (err) {
        console.log("Error ", err);
      } else {
        console.log("Build...");
        sendMSG();
      }
    }
  },
})
.then(result => {
  // console.log("*** ", result )
})
.catch(err => console.log("ERROR ==> Some error has occured...", err))

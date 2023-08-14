import https from "https";
import fs from "fs";
import app from "./server.js";
import env from "./services/EnvService.js";

const options = {
  cert: fs.readFileSync(env.cert),
  key: fs.readFileSync(env.key),
};

https.createServer(options, app).listen(env.port, () => {
  console.log("Listening on PORT: " + env.port);
});

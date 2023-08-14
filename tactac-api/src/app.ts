import * as dotenv from "dotenv";
import https from "https";
import app from "./routes";
import fs from "fs";

dotenv.config();

const PORT = process.env.PORT;
const options = {
  key: fs.readFileSync(process.env.SSL_KEY!),
  cert: fs.readFileSync(process.env.SSL_CERT!),
};

https.createServer(options, app).listen(PORT);

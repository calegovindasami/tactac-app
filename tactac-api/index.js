const express = require("express");
const https = require("https");
const fs = require("fs");
const post = require("./routing/post.js");
require("dotenv").config();

const app = express();
const options = {
  key: fs.readFileSync(process.env.SSL_KEY),
  cert: fs.readFileSync(process.env.SSL_CERT),
};
const port = process.env.PORT;

app.use(express.json());

//Posts
app.use("/post", post);

https.createServer(options, app).listen(port, () => {
  console.info("Listening on port: " + port);
});

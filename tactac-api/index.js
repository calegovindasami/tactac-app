const express = require("express");
const https = require("https");
const fs = require("fs");
const post = require("./routing/post.js");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const options = {
  key: fs.readFileSync(process.env.SSL_KEY),
  cert: fs.readFileSync(process.env.SSL_CERT),
};
const port = process.env.PORT;
const connectionString = process.env.MONGO_SERVER;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database has been connected successfully");
  })
  .catch((error) => {
    console.error(error);
  });

app.use(express.json());

//Posts
app.use("/post", post);

https.createServer(options, app).listen(port, () => {
  console.info("Listening on port: " + port);
});

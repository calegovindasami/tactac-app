import express from "express";
import database from "./services/DatabaseService.js";

const app = express();

app.get("/", async (req, res) => {
  res.send("<h1>SSL Certified</h1>");
  await database();
  console.log("Done");
});

export default app;

import express from "express";

const app = express();

//Home page
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

export default app;

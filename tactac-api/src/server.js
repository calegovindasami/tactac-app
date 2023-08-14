import express from "express";
import database from "./services/DatabaseService.js";
import userModel from "./schemas/user.js";
import bodyParser from "body-parser";
const app = express();

app.use(express.json());

app.post("/register", async (req, res) => {
  const user = new userModel({ ...req.body });
  console.log(req.body);
  (await database()).registerUser(user);
  res.sendStatus(200);
});

export default app;

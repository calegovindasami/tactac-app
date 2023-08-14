import mongoose from "mongoose";
import env from "./EnvService.js";

const database = async () => {
  await mongoose
    .connect(env.mongoServer)
    .then(() => {
      console.log("Database connection successful!");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default database;

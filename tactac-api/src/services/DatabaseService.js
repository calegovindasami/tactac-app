import mongoose from "mongoose";
import env from "./EnvService.js";
import userModel from "../schemas/user.js";

const database = async () => {
  await mongoose
    .connect(env.mongoServer)
    .then(() => {
      console.log("Database connection successful!");
    })
    .catch((error) => {
      console.error(error);
    });

  const registerUser = async (user) => {
    user
      .save()
      .then((doc) => {
        console.log(doc);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return { registerUser };
};

export default database;

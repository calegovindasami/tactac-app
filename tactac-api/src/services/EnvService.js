import dotenv from "dotenv";

dotenv.config();
const environment = {
  key: process.env.SSL_HKEY,
  cert: process.env.SSL_HCERT,
  port: process.env.PORT,
  mongoServer: process.env.MONGO_SERVER,
};

export default environment;

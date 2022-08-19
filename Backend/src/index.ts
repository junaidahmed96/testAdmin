import express from "express";
import { authorizationRouter } from "./modules/authorization/routes/authorization";
import connects from "./config/database";
import { userRouter } from "./modules/user/routes/user";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  cors({
    origin: "*",
  })
);
const PORT = 4000;
connects();

app.use("/", authorizationRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running on Port", PORT);
});

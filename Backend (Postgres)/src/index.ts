import express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import * as dotenv from "dotenv";
import cors from "cors";

import { authorizationRouter } from "./routes/authorization";
import { userRouter } from "./routes/user";
const app = express();

AppDataSource.initialize()
  .then(async () => {
    // create express app
    dotenv.config();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(
        cors({
          origin: "*",
        })
      );
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

    app.use("/", authorizationRouter);
    app.use("/user", userRouter);
    app.listen(process.env.PORT || 3000);

    console.log("Server has started on port " + process.env.PORT);
  })
  .catch((error) => console.log(error));

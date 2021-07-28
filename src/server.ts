import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(process.env.PORT, () =>
  console.log("Runnig server " + process.env.PORT)
);

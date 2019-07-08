import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import path from "path";
import connect from "./connect";

import homeRouter from "./routes/home";
import userRouter from "./routes/user";

const db = "mongodb://mongoadmin:codesquad@localhost:22222/newstest?authSource=admin";
connect({db});

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../src/public")));

app.use("/", homeRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error", {
    env: req.app.get("env"),
    errorMessage: err.message,
    stackTrace: err.stack,
    statusCode: err.status,
  });
});

export default app;

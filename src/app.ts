import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import path from "path";

import homeController from "./controllers/home";

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../src/public")));

app.use("/", homeController);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error", {statusCode: err.status, errorMessage: err.message});
});

export default app;

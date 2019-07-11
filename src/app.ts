import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import createError from "http-errors";
import mongo from 'connect-mongo';
import passport from 'passport';
import logger from "morgan";
import path from "path";
import connect from "./connect";
import { MONGODB_URI, SESSION_SECRET } from './util/secrets';

import homeRouter from "./routes/home";
import userRouter from "./routes/user";

const MongoStore = mongo(session);
const mongoUrl = MONGODB_URI;

connect({db: mongoUrl});

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  store: new MongoStore({
    url: mongoUrl,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session())
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

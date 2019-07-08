"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const connect_1 = __importDefault(require("./connect"));
const home_1 = __importDefault(require("./routes/home"));
const user_1 = __importDefault(require("./routes/user"));
const db = "mongodb://mongoadmin:codesquad@localhost:22222/newstest?authSource=admin";
connect_1.default({ db });
const app = express_1.default();
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "../src/public")));
app.use("/", home_1.default);
app.use("/user", user_1.default);
app.use((req, res, next) => {
    next(http_errors_1.default(404));
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
exports.default = app;
//# sourceMappingURL=app.js.map
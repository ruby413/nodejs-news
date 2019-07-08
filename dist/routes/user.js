"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
const user_1 = __importDefault(require("../controllers/user"));
const userRouter = express_1.Router();
userRouter.get("/:id", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.GetUserByObjectId({
            _id: req.params.id,
        });
        return res.send({ user });
    }
    catch (error) {
        http_errors_1.default(500);
        next(error);
    }
}));
userRouter.post("/", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.CreateUser({
            age: parseInt(req.body.age, 10),
            id: req.body.id,
            password: req.body.password,
        });
        return res.send({ user });
    }
    catch (error) {
        http_errors_1.default(500);
        next(error);
    }
}));
userRouter.delete("/:id", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.DeleteUserByObjectId({
            _id: req.params.id,
        });
        return res.send({ user });
    }
    catch (error) {
        http_errors_1.default(500);
        next(error);
    }
}));
userRouter.put("/:id", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.PutUserByObjectId({
            _id: req.params.id,
            age: req.body.age,
            id: req.body.id,
            password: req.body.password,
        });
        return res.send({ user });
    }
    catch (error) {
        http_errors_1.default(500);
        next(error);
    }
}));
exports.default = userRouter;
//# sourceMappingURL=user.js.map
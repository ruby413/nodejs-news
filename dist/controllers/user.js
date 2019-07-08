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
const user_model_1 = __importDefault(require("../models/user.model"));
const fieldset_1 = require("../util/fieldset");
function CreateUser({ age, id, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield user_model_1.default.create({
                age,
                id,
                password,
            });
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
function GetUserByObjectId({ _id, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.find({ _id });
            return user;
        }
        catch (error) {
            throw error;
        }
    });
}
function DeleteUserByObjectId({ _id, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield user_model_1.default.deleteOne({ _id });
            return result;
        }
        catch (error) {
            throw error;
        }
    });
}
function PutUserByObjectId({ _id, age, id, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield user_model_1.default.update({ _id }, fieldset_1.removeNullFields({ age, id, password }));
            return result;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.default = {
    CreateUser,
    DeleteUserByObjectId,
    GetUserByObjectId,
    PutUserByObjectId,
};
//# sourceMappingURL=user.js.map
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const UserScheme = new mongoose_1.Schema({
    age: { type: Number, required: true },
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
exports.default = mongoose_1.default.model("User", UserScheme);
//# sourceMappingURL=user.model.js.map
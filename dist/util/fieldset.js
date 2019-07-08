"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeNullFields(document) {
    const newDocument = {};
    for (const key in document) {
        if (document.hasOwnProperty(key) && document[key]) {
            newDocument[key] = document[key];
        }
    }
    return newDocument;
}
exports.removeNullFields = removeNullFields;
//# sourceMappingURL=fieldset.js.map
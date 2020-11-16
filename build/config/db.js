"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.default = (function (str) {
    return mongoose_1.connect(str, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

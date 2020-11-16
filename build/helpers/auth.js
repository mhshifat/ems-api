"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../config");
exports.createToken = function (user) {
    var payload = {
        uid: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
    };
    var token = jsonwebtoken_1.sign(payload, config_1.ENV.JWT.SECRET, { expiresIn: 24 * 60 * 60 });
    return token;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendFailure500Response = exports.sendSuccess200Response = void 0;
exports.sendSuccess200Response = function (res, data) {
    return res.status(200).json({
        success: true,
        message: "",
        data: data,
    });
};
exports.sendFailure500Response = function (res, err) {
    var _a, _b, _c, _d, _e, _f;
    var status = parseInt((_c = (_b = (_a = err.message) === null || _a === void 0 ? void 0 : _a.split) === null || _b === void 0 ? void 0 : _b.call(_a, ":")) === null || _c === void 0 ? void 0 : _c[0], 10) || 500;
    var message = err.message
        ? ((_f = (_e = (_d = err.message) === null || _d === void 0 ? void 0 : _d.split) === null || _e === void 0 ? void 0 : _e.call(_d, ":")) === null || _f === void 0 ? void 0 : _f[1]) || err.message
        : "Something went wrong, please try again later!";
    return res.status(status).json({
        success: false,
        message: message,
        errors: (err === null || err === void 0 ? void 0 : err.name) === "ValidationError"
            ? err.message.split(". ").map(function (msg) { return msg + "."; })
            : [],
    });
};

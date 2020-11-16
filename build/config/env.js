"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
process.env.NODE_ENV = process.env.NODE_ENV || "development";
exports.default = {
    API: {
        PORT: process.env.PORT || "5000",
    },
    DB: {
        URI: process.env.MONGODB_URI || "",
    },
    JWT: {
        SECRET: process.env.JWT_SECRET || "my-super-secret",
    },
};

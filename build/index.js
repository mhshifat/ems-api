"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var config_1 = require("./config");
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1", routes_1.default);
config_1.CBD(config_1.ENV.DB.URI)
    .then(function () {
    console.log("[EMS-API] Connection established.");
    app.listen(config_1.ENV.API.PORT, function () {
        console.log("[EMS-API] The server is running on " + config_1.ENV.API.PORT + ".");
    });
})
    .catch(function (err) {
    console.log("[EMS-API] ERROR: " + err.message);
});

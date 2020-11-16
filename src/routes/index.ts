import express from "express";

const routes = express.Router();
routes.use("/users", require("./v1/users").default);
routes.use("/tasks", require("./v1/tasks").default);
routes.use("/leaves", require("./v1/leaves").default);

export default routes;

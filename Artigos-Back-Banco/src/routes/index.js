const { Router } = require("express");


const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const revisorRouter = require("./revisor.routes");
const articleRoutes = require("./article.routes");


const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/article", articleRoutes);

routes.use("/revisor", revisorRouter);

module.exports = routes;
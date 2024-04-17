const { Router } = require("express");
const RevisorController = require("../controllers/RevisorController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const revisorRoutes = Router();

const revisorController = new RevisorController();

revisorRoutes.use(ensureAuthenticated);

revisorRoutes.post("/correction",ensureAuthenticated,revisorController.correction);
revisorRoutes.get("/articles",ensureAuthenticated,revisorController.showRevisor)


module.exports = revisorRoutes;
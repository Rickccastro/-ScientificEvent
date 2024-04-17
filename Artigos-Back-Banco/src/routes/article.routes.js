const { Router } = require("express");
const ArticleController = require("../controllers/ArticleController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const articleRoutes = Router();

const articleController = new ArticleController();

articleRoutes.post("/",ensureAuthenticated,articleController.create);

articleRoutes.get("/allMyArticle",ensureAuthenticated,articleController.showMyArticle);
articleRoutes.get("/showArticleCorrection",ensureAuthenticated,articleController.showArticleCorrection);

articleRoutes.get("/all",ensureAuthenticated,articleController.showAll);



module.exports = articleRoutes;
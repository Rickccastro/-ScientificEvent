const knex = require("../database/knex");


class ArticleController {
    async create(request, response) {
        const { title, description } = request.body;
        const user_id = request.user.id;

        await knex("article").insert({ title, description, user_id: user_id });

        return response.status(201).json();
    }

    async showMyArticle(request, response) {

        const { id } = request.user;
        const articles = await knex("article")
            .select("title", "description","id")
            .where({ user_id: id });

        return response.json({ articles });
    }

    async showArticleCorrection(request, response) {
        const { id } = request.user;
        const articles = await knex("article")
            .select("title", "description", "id", "correction")
            .where({ user_id: id })
            .whereNotNull("correction")
            .orderByRaw("RANDOM()") // Ordena aleatoriamente
            .limit(5); // Limita a 5 resultados
    
        return response.json({ articles });
    }
    async showAll(request, response) {
        const articles = await knex("article")
            .select("title", "description")

        return response.json({ articles });
    }
}

module.exports = ArticleController;
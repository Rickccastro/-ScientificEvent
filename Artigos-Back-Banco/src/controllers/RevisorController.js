const knex = require("../database/knex");

class RevisorController {

  async correction(request, response) {
    const { title,correction } = request.body;
    await knex("article")
    .where({title:title})
    .update({ correction: correction })

    return response.status(201).json();
  }
  
  async showRevisor(request, response) {
    const { id } = request.user;
    const articles = await knex("article")
        .select("title", "description", "user_id","id","correction")
        .whereNot({ user_id: id })
        .orderByRaw('RANDOM()')
        .limit(5);

    return response.json({ articles });
}

}

module.exports = RevisorController;
const knex = require("../database/knex");
const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email, password,address,phone,employment_location,card_number,card_expiry_date,card_brand,volunteer_reviewer } = request.body;

    const checkUserExists = await knex("users").where({ email });

    if (checkUserExists.length > 0) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

     await knex("users").insert({ name, email, password: hashedPassword,address,phone
      ,employment_location,card_number,card_expiry_date,card_brand,volunteer_reviewer });

    return response.status(201).json();
  }
}

module.exports = UsersController;
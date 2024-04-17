const faker = require('faker');

exports.up = async function(knex) {
  await knex.schema.createTable('article', function(table) {
    table.increments('id');
    table.text('title').notNullable();
    table.text('description').notNullable();
    table.text('correction');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('user_id').references('id').inTable('users');
  });

  // Gere e insira dados na tabela
  const NUMERO_DE_ARTIGOS = 500000; // 500000 artigos

  for (let i = 0; i < NUMERO_DE_ARTIGOS; i++) {
    const correctionValue = Math.random() < 0.5 ? null : faker.lorem.sentences(1); // 50% de chance de ter valor null
    const article = {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentences(1),
      correction: correctionValue,
      user_id: faker.datatype.number({ min: 1, max: 5000 }) // Supondo que os IDs de usuário vão de 1 a 5000
    };

    await knex('article').insert(article);
  }
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('article');
};

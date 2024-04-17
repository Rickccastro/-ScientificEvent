const faker = require('faker');
const creditCardGenerator = require('creditcard-generator');


exports.up = async function(knex) {
  await knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.text('address');
    table.text('phone');
    table.text('employment_location');
    table.text('card_number');
    table.text('card_expiry_date');
    table.text('card_brand');
    table.enum('volunteer_reviewer', ['Revisor', 'Autor'], { useNative: true, enumName: 'volunteer_reviewer' }).notNullable().defaultTo('Autor');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

  // Gere e insira dados na tabela
  const NUMERO_DE_REGISTROS = 500000; // 500000 registros

  // Divida a inserção em transações menores
  const batchSize = 100;
  for (let i = 0; i < NUMERO_DE_REGISTROS; i += batchSize) {
    await knex.transaction(async trx => {
      const dadosInsercao = generateData(batchSize);
      await trx.insert(dadosInsercao).into('users');
    });
  }
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
};

function generateData(numRows) {
  const dadosInsercao = [];
  for (let i = 0; i < numRows; i++) {
    const cardNumber = creditCardGenerator.GenCC();
    const cardExpiryDate = faker.date.future().toISOString().slice(0, 10); // Gera uma data de expiração no futuro
    dadosInsercao.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
      employment_location: faker.address.city(),
      card_number: cardNumber,
      card_expiry_date: cardExpiryDate,
      card_brand: generateRandomCardBrand(),
      volunteer_reviewer: faker.random.arrayElement(['Revisor', 'Autor'])
    });
  }
  return dadosInsercao;
}

function generateRandomCardBrand() {
  const brands = ['Visa', 'Mastercard', 'American Express', 'Discover'];
  return faker.random.arrayElement(brands);
}

exports.up = async function (knex) {
  await knex.schema.createTable('cars', tab => {
    tab.increments('cars_id')
    tab.string('vin_num', 100).unique()
    tab.string('cars_make').notNullable()
    tab.string('cars_model').notNullable()
    tab.integer('mileage', 1000).notNullable()
    tab.string('title').notNullable()
    tab.string('transmission')
  })
};

exports.down = async function (knex) {
 await knex.schema.dropTableIfExists('cars')
};

const knex = require('knex')

const db = knex({
  client: 'sqlite3',
  useNullableDefault: true
})


const getAll = () => {
return db('cars');
}

const getById = (id) => {
  return db('cars').where('cars_id', id).first()
}

const create = (car) => {
 const [id] = db('cars').insert(car)
 return getById(id);
}

module.exports = {
  getAll,
  getById,
  create
}
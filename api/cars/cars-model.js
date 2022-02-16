const db = require('../../data/db-config');

const getAll = async() => {
  let result = await db('cars');
  return result;
}

const getById = async(id) => {
  let result = await db('cars').where('id', id).first();
  return result;
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first();
}

const create = async (car) => {
  const [id] = await db('cars').insert(car);
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create
}
const db = require('../database/dbConfig');

module.exports = {
  find,
  findBy,
  findById,
  addUser,
}

function find() {
  return db('users');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users').where({ id }).first();
}

async function addUser(user) {
  const [id] = await db('users').insert(user);
  return findById(id)
}
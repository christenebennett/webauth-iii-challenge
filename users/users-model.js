const db = require('../database/dbConfig');

module.exports = {
  find,
  findBy,
  findById,
  addUser
}

function find() {
  db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  db('users').where(filter);
}

function findById(id) {
  db('users').where({ id }).first();
}

async function addUser(user) {
  const [id] = await db('users').insert(user);
  return findById(id)
}
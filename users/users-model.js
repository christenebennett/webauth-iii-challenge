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

function addUser(user) {
  const [id] = db('users').insert(user);
  return findById(id)
}
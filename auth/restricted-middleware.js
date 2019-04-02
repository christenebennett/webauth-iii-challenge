const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const { jwtSecret } = require('../config/secrets');

module.exports = (req, res, next) => {
  
}
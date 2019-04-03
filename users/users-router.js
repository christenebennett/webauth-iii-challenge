const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req,res) => {
  Users.find()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    res.status(400).json({message: 'You shall not pass!'})
  });
})

module.exports = router;
const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

// router.get('/', restricted, (req,res) => {
router.get('/', (req,res) => {
  Users.find()
  .then(users => {
    res.json(users);
  })
  .catch(err => console.log(err));
})



module.exports = router;
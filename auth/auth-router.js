const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-router');
const { jwtSecret } = require('../config/secrets');

router.post('/register', (req, res) => {
  user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.addUser(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json({err: "An error occurred while registering."})
    })
})


module.exports = router;
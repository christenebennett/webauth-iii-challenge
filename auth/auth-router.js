const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
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

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, jwtSecret, options);
}

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({message: `Welcome ${user.username}! Have a token!`, token});
      } else {
        res.status(401).json({ message: 'You shall not pass!' });
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router;
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('./generateToken');

const Auth = require('./auth-model');

//endpoint to register a new user. Requires username and password
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Auth.add(user)
    .then(saved => {
      const token = generateToken(saved);
      res.status(201).json({saved, token});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;

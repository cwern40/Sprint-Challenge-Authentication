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
  let { username, password } = req.body;

  Auth.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: 'You are logged in',
          token
        })
      } else {
        res.status(401).json({
          message: 'You shall not pass!'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

module.exports = router;

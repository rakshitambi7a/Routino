const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');


// Register a new user
router.post('/register', async (req, res) => {
  try {
    let reqBody;
    req.on("data", (chunks) => {
      reqBody += chunks.toString();
    });
    req.on("end", async () => {
      const { username, password } = JSON.parse(reqBody);
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        username: username,
        password: hashedPassword,
      });
      const savedUser = await user.save();
      res.send({ user: savedUser._id });
      });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Authenticate a user
router.post('/login', async (req, res) => {
  try {
    let reqBody;
    req.on("data", (chunks) => {
      reqBody += chunks.toString();
    });
    req.on("end", async () => {
      const { username, password } = JSON.parse(reqBody);
      const user = await User.findOne({ username: username });
      if (!user) return res.status(400).send('User not found');

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(400).send('Invalid password');

      res.send('User authenticated');
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

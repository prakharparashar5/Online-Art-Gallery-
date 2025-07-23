const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Register endpoint
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const password_hash = bcrypt.hashSync(password, 10);

  db.run(
    'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
    [username, email, password_hash],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ id: this.lastID, username, email });
    }
  );
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (err || !user) return res.status(400).json({ error: 'User not found' });
    if (!bcrypt.compareSync(password, user.password_hash))
      return res.status(400).json({ error: 'Invalid password' });
    res.json({ id: user.id, username: user.username, email: user.email });
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000')); 
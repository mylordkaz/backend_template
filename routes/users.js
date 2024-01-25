const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
  // this get executed when user visit http://localhost:8000/user
  res.send('this is a user route');
});

router.get('/101', (req, res) => {
  // this get executed when user visit http://localhost:8000/user/101
  res.send('this is user 101 route');
});

// export the router module, that server.js file can use
module.exports = router;

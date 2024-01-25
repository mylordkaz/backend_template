const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

// Define a route

// this get executed when user visit http://localhost:8000/user
router.get('/', userController.getUser);

// this get executed when user visit http://localhost:8000/:userId
router.get('/:userId', userController.getUserById);

// export the router module, that server.js file can use
module.exports = router;

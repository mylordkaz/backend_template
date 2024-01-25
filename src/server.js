const express = require('express');
const cors = require('express');
const helmet = require('helmet');

const app = express();

// Include route files
const usersRoute = require('../routes/users');

//Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

//use the route from here
const startServer = () => {
  app.use('/users', usersRoute);
  app.get('/', (req, res) => {
    res.send("What's up brooo ?!");
  });

  return app;
};

module.exports = { startServer };

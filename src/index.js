const { startServer } = require('./server');
const dotenv = require('dotenv');
const server = startServer();

dotenv.config();

server.listen(process.env.BACK_PORT, () => {
  console.log('Server run, port :${BACK_PORT}');
});

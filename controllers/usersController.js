const getUser = (req, res) => {
  res.send('This is a user route');
};

const getUserById = (req, res) => {
  const userId = req.params.userIdres.send(`this is user ${userId} route`);
};

module.exports = { getUser, getUserById };

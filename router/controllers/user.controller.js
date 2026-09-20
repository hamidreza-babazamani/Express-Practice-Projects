const getUsers = (req, res, next) => {
  res.send("users");
};
const createNewUsers = (req, res, next) => {
  res.send("created new user");
};
const deleteUsers = (req, res, next) => {
  res.send(`delete user by id#${req.params.id}`);
};
const updateUsers = (req, res, next) => {
  res.send(`updated user by id#${req.params.id}`);
};
module.exports = {
  getUsers,
  createNewUsers,
  deleteUsers,
  updateUsers,
};

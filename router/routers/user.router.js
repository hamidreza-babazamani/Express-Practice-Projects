const { Router } = require("express");
const {
  getUsers,
  createNewUsers,
  deleteUsers,
  updateUsers,
} = require("../controllers/user.controller");
const router = Router();
router.get("/", getUsers);
router.post("/", createNewUsers);
router.delete("/:id", deleteUsers);
router.patch("/:id", updateUsers);
module.exports = router;

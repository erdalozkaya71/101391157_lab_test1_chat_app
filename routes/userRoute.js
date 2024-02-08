const express = require("express");
const userController = require("../controllers/userController");
const login = require("../controllers/authController");

const router = express.Router();

//router.use(authController.restrictTo('admin'));

router.route("/").get(userController.getAllUsers);
router.route("/signup").post(userController.createUser);
router.route("/login").post(login);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

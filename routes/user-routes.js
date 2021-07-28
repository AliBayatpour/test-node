const express = require("express");
const { check } = require("express-validator");
const userControllers = require("../controllers/user-controllers");

const router = express.Router();

router.get("/", userControllers.getUser);
router.post(
  "/",
  [check("name").not().isEmpty(), check("email").normalizeEmail().isEmail()],
  userControllers.postUser
);

module.exports = router;

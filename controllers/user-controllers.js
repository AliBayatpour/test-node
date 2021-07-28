const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const DUMMY_USERS = [];

getUser = (req, res, next) => {
  console.log("GET Request");
  res.status(200).json({ user: DUMMY_USERS });
};

postUser = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }
  const { name, email } = req.body;
  DUMMY_USERS[0] = { name, email };

  console.log();

  res.status(200).json({ message: "user is added" });
};

exports.getUser = getUser;
exports.postUser = postUser;

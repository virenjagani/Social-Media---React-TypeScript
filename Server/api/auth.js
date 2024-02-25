const authModel = require("../models/authModel");
const { validationResult, check } = require("express-validator");
const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    try {
      const userFound = await authModel.findOne({ email: req.body.email });
      if (!userFound) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = await authModel.create({
          ...req.body,
          password: hashedPassword,
        });
        return res.status(200).json({
          status: "success",
          message: "User successfully created",
          data: user,
        });
      } else {
        return res.status(400).json({
          status: "error",
          message: "User already exist",
          data: [],
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: "Something wrong",
        data: [],
      });
    }
  },
};

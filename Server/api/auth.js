const authModel = require("../models/authModel");
const { validationResult, check } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    try {
      if (
        req.body.email &&
        req.body.phoneNumber &&
        req.body.password &&
        req.body.firstName &&
        req.body.lastName
      ) {
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
      } else {
        return res.status(400).json({
          status: "error",
          message: "User information missing",
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

  login: async (req, res) => {
    try {
      if (req.body.email && req.body.password) {
        const { password, email } = req.body;
        const user = await authModel.findOne({ email });
        //Email check
        !user &&
          res.status(400).json({
            status: "error",
            message: "This user email is not registed.",
            data: [],
          });

        //Password check
        const passwordCheck = await bcrypt.compare(password, user.password);
        console.log("object");

        !passwordCheck &&
          res.status(400).json({
            status: "error",
            message: "Password is not correct.",
            data: [],
          });

        //jwt Token generate.
        let jwtTokenSign = {
          _id: user._id,
          email,
        };
        let accessToken = jwt.sign(jwtTokenSign, `${process.env.JWTSECRET}`, {
          expiresIn: `${process.env.SocialMediaApp}`,
        });

        const loginCredsUpdated = await authModel.findByIdAndUpdate(
          { _id: user._id },
          { accessToken },
          { new: true }
        );

        return res.status(200).json({
          status: "success",
          message: "Successfully login.",
          data: loginCredsUpdated,
        });
      } else {
        return res.status(400).json({
          status: "error",
          message: "User information missing",
          data: [],
        });
      }
    } catch (error) {}
  },
};

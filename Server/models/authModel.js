const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    accessToken: { type: String, default: "" },
  },
  { timestamps: true }
);

const authModel = mongoose.model("auth", authSchema);

module.exports = authModel;

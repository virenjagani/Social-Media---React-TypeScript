const express = require("express");
const cors = require("cors");
const http = require("http");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const authRoute = require("./route/authRoutes.js");

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use("/api/auth", authRoute);

mongoose
  .connect(`${process.env.MONGOOSE_URL}`)
  .then((res) =>
    console.log("connection on MongoDB:- ", `${process.env.MONGOOSE_URL}`)
  )
  .catch((error) => console.log("connection ERROR on MongoDB:- ", error));

server.listen(process.env.PORT, () =>
  console.log("Server running on:- ", process.env.PORT)
);

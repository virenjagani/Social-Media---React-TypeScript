const express = require("express");
const cors = require("cors");
const http = require("http");
const helmet = require("helmet");
require("dotenv").config({ path: "./.env" });

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(cors())



server.listen(process.env.PORT, () =>
  console.log("Server running on:- ", process.env.PORT)
);

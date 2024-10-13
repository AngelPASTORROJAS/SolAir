const express = require("express");
const morgan = require('morgan');

const app = express();

//Settings
app.set("port",4000)

app.use(morgan("dev"))

app.use(express.json())

module.exports = app;
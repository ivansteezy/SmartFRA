const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const app = express();
const resident = require('./Controller/ResidentController');

app.listen(3000, () => console.log("Smart FRA server is now running..."));

app.use('/resident', resident);


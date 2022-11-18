const resident = require('./Controller/ResidentController');
const express = require("express");
const app = express();

app.listen(3000, () => console.log("Smart FRA server is now running..."));

app.use('/resident', resident);


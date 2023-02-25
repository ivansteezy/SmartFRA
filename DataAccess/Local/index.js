const resident = require('./Controller/ResidentController');
const residentAccess = require('./Controller/ResidentAccessController');
const express = require("express");
const app = express();

app.listen(3000, () => console.log("Smart FRA server is now running on port 3000..."));
app.use(express.json());
app.use('/resident-access', residentAccess);
app.use('/resident', resident);



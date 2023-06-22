const resident = require('./Controller/ResidentController');
const house = require('./Controller/HouseController')
const residentAccess = require('./Controller/ResidentAccessController');

const express = require('express');
const cors = require('cors');

const app = express();
app.listen(3000, () => console.log("Smart FRA server is now running on port 3000..."));
app.use(cors());
app.use(express.json());
app.use('/resident-access', residentAccess);
app.use('/resident', resident);
app.use('/house', house)

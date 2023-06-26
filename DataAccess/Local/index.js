const resident = require('./Controller/ResidentController');
const house = require('./Controller/HouseController');
const guest = require('./Controller/GuestController');
const residentAccess = require('./Controller/ResidentAccessController');
const generalServiceAccess = require('./Controller/GeneralServiceAccessController');
const services = require('./Controller/ServicesController');
const residentServiceAccess = require('./Controller/ResidentServiceAccessController');

const express = require('express');
const cors = require('cors');


const app = express();
app.listen(3000, () => console.log("Smart FRA server is now running on port 3000..."));
app.use(cors());
app.use(express.json());
app.use('/resident-access', residentAccess);
app.use('/resident', resident);
app.use('/house', house);
app.use('/guest', guest);
app.use('/general-service-access', generalServiceAccess);
app.use('/services', services);
app.use('/resident-service-access', residentServiceAccess);

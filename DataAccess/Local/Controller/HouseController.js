const express = require('express');
const HouseRepository = require('../Repository/HouseRepository');
const router = express.Router();

router.get('/AllHouses', async function (request, response, next) {
    const repository = HouseRepository;
    try {
        console.log('Get all houses at /AllHouses endpoint...');
        const result = await repository.GetAllHouses();
        response.json(result);
        console.log('Got all houses successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all houses', error.message);
        next(error);
    }
});

router.get('/HouseByResident/:idHouse', async function (request, response, next) {
    const repository = HouseRepository;
    try {
        console.log('Get house by resident at /AllHouses endpoint...');
        const result = await repository.GetHouseByResident(request.params.idHouse);
        response.json(result);
        console.log('Got house by resident successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get house by resident', error.message);
        next(error);
    }
});

module.exports = router;
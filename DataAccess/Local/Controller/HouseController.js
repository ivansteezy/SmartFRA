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

router.post('/HouseRegistry', async function(request, response, next) {
    const repository = HouseRepository;

    try {
        console.log('Inserting a new house endpoint...');
        const result = await repository.InsertHouse(request.body);
        response.json(result);
    }
    catch(error) {
        console.error('Error while trying to post the house', error.message);
        next(error);
    }
})


module.exports = router;
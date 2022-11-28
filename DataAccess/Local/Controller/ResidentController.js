const express = require('express');
const ResidentRepository = require('../Repository/ResidentRepository');
const router = express.Router();

router.get('/AllResidents', async function (request, response, next) {
    const repository = ResidentRepository;
    try {
        console.log('Get all residents at /AllResidents endpoint...');
        const result = await repository.GetAllResidents()
        response.json(result);
        console.log('Got all residents successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all residents', error.message);
        next(error);
    }
});

router.get('/ResidentById/:id',  (request, response) => {
    response.json({
        id: request.params.id
    });
});

module.exports = router;
const express = require('express');
const ResidentRepository = require('../Repository/ResidentRepository');
const router = express.Router();

router.get('/AllResidents', async function (request, response, next) {
    const repository = ResidentRepository;
    try {
        response.json(await repository.GetAllResidents());
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
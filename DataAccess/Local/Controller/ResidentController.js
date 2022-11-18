const express = require('express');
const ResidentRepository = require('../Repository/ResidentRepository');
const router = express.Router();

router.get('/AllResidents', (request, response) => {
    const repository = ResidentRepository;
    const result = repository.GetAllResidents();

    response.json({
        members: result
    });
});

router.get('/ResidentById/:id',  (request, response) => {
    response.json({
        id: request.params.id
    });
});

module.exports = router;
const express = require('express');
const GeneralServiceAccessRepository = require('../Repository/GeneralServiceAcessRepository');
const router = express.Router();

router.get('/AllGeneralServiceAccess', async function (request, response, next) {
    const repository = GeneralServiceAccessRepository;
    try {
        console.log('Get all general service access at /AllGeneralServiceAccess endpoint...');
        const result = await repository.GetAllGeneralServiceAccess();
        response.json(result);
        console.log('Got all general service access successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all guests', error.message);
        next(error);
    }
});

module.exports = router;
const express = require('express');
const GuestAccessRepository = require('../Repository/GuestAccessRepository');
const router = express.Router();

router.get('/AllGuestsAccess', async function (request, response, next) {
    const repository = GuestAccessRepository;
    try {
        console.log('Get all guests access at /AllGuestsAccess endpoint...');
        const result = await repository.GetAllGuestAccess();
        response.json(result);
        console.log('Got all guests access successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all guests access', error.message);
        next(error);
    }
});

module.exports = router;
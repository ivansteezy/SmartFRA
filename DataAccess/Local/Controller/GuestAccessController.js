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

router.post('/GuestAccessRegistry', async function (request,response,next) {
    const repository = GuestAccessRepository;

    try{
        console.log('Post a resident at /GuestAccessRegistry');
        const result = await repository.InsertGuestAccess(request.body);
        response.json(result);
        console.log('Post the GuestAccess succesfully');
    }
    catch(error){
        console.error('Error while trying to post the GuestAccess', error.message);
        next(error);
    }
});

router.put('/UpdateExitTime/:exitTime/:idGuest', async function (request, response, next) {
    const repository = GuestAccessRepository;
    try {
        console.log('Update exitTime at /UpdateExitTime/:exitTime/:idGuest endpoint...');
        const result = await repository.UpdateExitTime(request.params.exitTime, request.params.idGuest);
        response.json(result);
        console.log('Updated exitTime successfully');
    }
    catch(error) {
        console.error('Error while trying to update exitTime', error.message);
        next(error);
    }
});

module.exports = router;
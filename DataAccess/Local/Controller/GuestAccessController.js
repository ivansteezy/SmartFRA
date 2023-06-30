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
        console.log("FROM HERE WEWE: ",result);
        response.json(result);
        console.log('Post the GuestAccess succesfully');
        console.log(request);
    }
    catch(error){
        console.error('Error while trying to post the GuestAccess', error.message);
        console.log(request);
        next(error);
    }
});

module.exports = router;
const express = require('express');
const GuestRepository = require('../Repository/GuestRepository');
const router = express.Router();

router.get('/AllGuests', async function (request, response, next) {
    const repository = GuestRepository;
    try {
        console.log('Get all guests at /AllGuests endpoint...');
        const result = await repository.GetAllGuests();
        response.json(result);
        console.log('Got all guests successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all guests', error.message);
        next(error);
    }
});

router.get('/GuestById/:idGuest', async function (request, response, next) {
    const repository = GuestRepository;
    try {
        console.log('Get guest by ID at /GuestById/:idGuest endpoint...');
        const result = await repository.GetGuestById(request.params.idGuest);
        response.json(result);
        console.log('Got guest by ID successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get guest by ID', error.message);
        next(error);
    }
});

router.post('/GuestRegistry', async function (request,response) {
    const repository = GuestRepository;

    try{
        console.log('Post a guest at /GuestRegistry');
        const result = await repository.InsertGuest(request.body);
        response.json(result);
        console.log('Post the guest succesfully');
    }
    catch(error){
        console.error('Error while trying to post the guest', error.message);
        next(error);
    }
});

module.exports = router;
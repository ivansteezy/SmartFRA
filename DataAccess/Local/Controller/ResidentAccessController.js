const express = require('express');
const ResidentAccessRepository = require('../Repository/ResidentAccessRepository');
const router = express.Router();

router.get('/AllResidentAccess', async function (request, response, next) {
    const repository = ResidentAccessRepository;
    try {
        console.log('Get all residents at /AllResidentAccess endpoint...');
        const result = await repository.GetAllResidentAccess()
        response.json(result);
        console.log('Got all residents successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all residents', error.message);
        next(error);
    }
});

router.post('/ResidentAccessRegistry', async function (request,response) {
    const repository = ResidentAccessRepository;

    try{
        console.log('Post a resident at /ResidentAccessRegistry');
        const result = await repository.InsertResidentAccess(request.body);
        response.json(result);
        console.log('Post the resident Access succesfully');
    }
    catch(error){
        console.error('Error while trying to post the resident Access', error.message);
        next(error);
    }
});

module.exports = router;
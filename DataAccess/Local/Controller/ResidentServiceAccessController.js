const express = require('express');
const ResidentServiceAccessRepository = require('../Repository/ResidentServiceAccessRepository');
const router = express.Router();

router.get('/AllResidentServiceAccess', async function (request, response, next) {
    const repository = ResidentServiceAccessRepository;
    try {
        console.log('Get all resident services access at /AllResidentServiceAccess endpoint...');
        const result = await repository.GetAllResidentServiceAccess();
        response.json(result);
        console.log('Got all resident services access successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all resident services access', error.message);
        next(error);
    }
});

router.post('/ResidentServiceAccessRegistry', async function (request,response) {
    const repository = ResidentServiceAccessRepository;

    try{
        console.log('Post a resident at /ResidentServiceAccessRegistry');
        const result = await repository.InsertResidentServiceAccess(request.body);
        response.json(result);
        console.log('Post the ResidentServiceAccess succesfully');
    }
    catch(error){
        console.error('Error while trying to post the ResidentServiceAccess', error.message);
        next(error);
    }
});


module.exports = router;
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

router.get('/ResidentById/:id', async function (request, response, next) {
    const repository = ResidentRepository;
    try {
        console.log('Get residents by id at /ResidentById/:id endpoint...');
        const result = await repository.GetResidentById(request.params.id);
        response.json(result);
        console.log('Got resident successfully');
    }
    catch(error) {
        console.error('Error while trying to get resident', error.message);
        next(error);
    }
});

router.post('/ResidentRegistry', async function (request,response) {
    const repository = ResidentRepository;

    try{
        console.log('Post a resident at /ResidentRegistry');
        const result = await repository.InsertResident(request.body);
        response.json(result);
        console.log('Post the resident succesfully');
    }
    catch(error){
        console.error('Error while trying to post the resident', error.message);
        next(error);
    }
    
})

module.exports = router;
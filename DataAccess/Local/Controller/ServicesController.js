const express = require('express');
const ServicesRepository = require('../Repository/ServicesRepository');
const router = express.Router();

router.get('/AllServices', async function (request, response, next) {
    const repository = ServicesRepository;
    try {
        console.log('Get all services at /AllServices endpoint...');
        const result = await repository.GetAllServices();
        response.json(result);
        console.log('Got all services successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all services', error.message);
        next(error);
    }
});

router.post('/ServiceRegistry', async function (request, response) {
    const repository = ServicesRepository;

    try{
        console.log('Post a service at /ServiceRegistry');
        const result = await repository.InsertService(request.body);
        response.json(result);
        console.log('Post the service succesfully');
    }
    catch(error){
        console.error('Error while trying to post the service', error.message);
        next(error);
    }
});

router.get('/AllServicesWAccess', async function (request, response, next) {
    const repository = ServicesRepository;
    try {
        console.log('Get all services and access at /AllServicesWAccess endpoint...');
        const result = await repository.GetAllServicesWAccess();
        response.json(result);
        console.log('Got all services and access successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all services and access', error.message);
        next(error);
    }
});
module.exports = router;
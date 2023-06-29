const express = require('express');
const ResidentEventRepository = require('../Repository/ResidentEventRepository');
const router = express.Router();

router.get('/AllResidentEvents', async function (request, response, next) {
    const repository = ResidentEventRepository;
    try {
        console.log('Get all resident events at /AllResidentEvents endpoint...');
        const result = await repository.GetAllResidentEventsRepository();
        response.json(result);
        console.log('Got all resident events successfully, number of elements: ' + result.length);
    }
    catch(error) {
        console.error('Error while trying to get all resident events', error.message);
        next(error);
    }
});

router.post('/ResidentEventRegistry', async function (request,response,next) {
    const repository = ResidentEventRepository;

    try{
        console.log('Post a resident at /ResidentEventRegistry');
        const result = await repository.InsertResidentEvent(request.body);
        response.json(result);
        console.log('Post the ResidentEvent succesfully');
    }
    catch(error){
        console.error('Error while trying to post the ResidentEvent', error.message);
        next(error);
    }
});

router.put('/UpdateState/:state/:idEvent', async function (request, response, next) {
    const repository = ResidentEventRepository;
    try {
        console.log('Update state at /UpdateState/:state/:idEvent endpoint...');
        const result = await repository.UpdateState(request.params.state, request.params.idEvent);
        response.json(result);
        console.log('Updated state successfully');
    }
    catch(error) {
        console.error('Error while trying to state exitTime', error.message);
        next(error);
    }
});

module.exports = router;
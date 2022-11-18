const express = require('express');
const router = express.Router();

router.get('/AllResidents', (request, response) => {
    // const members = ['Alma', 'Churrus', 'Hector'];
    // response.json({
    //     members: members
    // });
});

router.get('/ResidentById/:id',  (request, response) => {
    response.json({
        id: request.params.id
    });
});

module.exports = router;
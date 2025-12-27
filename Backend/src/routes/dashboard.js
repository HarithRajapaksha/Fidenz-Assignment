const express = require('express');
const secured = require('../middleware/secured');
const response =require('../routes/response')

const router = express.Router();


router.get('/user', secured, (req, res) => {
    response.success(res, "User is authenticated", req.user);
    console.log(req.user);
});

module.exports = router;
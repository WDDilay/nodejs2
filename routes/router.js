const express = require('express');
const router = express.Router();
const controller = require('../controller/Controller.js');


router.get('/', controller.main);
router.get('/contact', controller.contact);



module.exports = router;
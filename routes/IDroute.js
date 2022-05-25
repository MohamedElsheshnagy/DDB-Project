var express = require('express');
var router = express.Router();
const control = require('../controllers/identfires_cont')
router.post('/createID', control.createID);


module.exports = router;
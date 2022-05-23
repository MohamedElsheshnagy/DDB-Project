var express = require('express');
var router = express.Router();
const control = require('../controllers/doctor')
router.post('/addDoctor', control.addDoctor);

router.get('/getDoctor', control.getDoctor);

router.patch('/updateDoctor/:id', control.updateDoctor);

router.delete('/deleteDotor/:id', control.deleteDoctor);

module.exports = router;

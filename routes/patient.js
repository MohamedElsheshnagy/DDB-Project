var express = require('express');
var router = express.Router();
const control = require('../controllers/patient')
router.post('/addPatient', control.addPatient);

router.get('/getPatient', control.getPatient);

router.patch('/updatePatient/:id', control.updatePatient);

router.delete('/deletePatient/:id', control.deletePatient);

module.exports = router;

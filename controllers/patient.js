const Patient = require('../models/patient');


addPatient = function (req, res, next) {
    const patient = new Patient({
        patient_name: req.body.patient_name,
        phone_number: req.body.phone_number,
        address: req.body.address,

    });
    patient.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Patient Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Patient Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getPatient = function (req, res, next) {
    Patient.find().
        then(resault => {
            res.status(200).json({
                massage: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}



updatePatient = function (req, res, next) {
    const newPatint = {
        patient_name: req.body.patient_name,
        phone_number: req.body.phone_number,
        address: req.body.address,
       

    }
    Patient.updateOne({ _id: req.params.id }, { $set: newPatient }).
        then(resault => {
            res.status(200).json({
                massage: 'Patient updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deletePatient = function (req, res, next) {
    Doctor.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Patient deleted Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

module.exports = {
    addPatient: addPatient,
    getPatient: getPatient,
    updatePatient: updatePatient,
    deletePatient: deletePatient
}
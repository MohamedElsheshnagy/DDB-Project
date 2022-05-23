const Doctor = require('../models/doctor');


addDoctor = function (req, res, next) {
    const doctor = new Doctor({
        doctor_name: req.body.doctor_name,
        specialization: req.body.specialization,
        phone_number: req.body.phone_number,
        address: req.body.address,
        image: req.file.path,
        patient: req.body.patient

    });
    doctor.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Doctor Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Doctor Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getDoctor = function (req, res, next) {
    Doctor.find().
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



updateDoctor = function (req, res, next) {
    const newDoctor = {
        doctor_name: req.body.doctor_name,
        specialization: req.body.specialization,
        phone_number: req.body.phone_number,
        address: req.body.address,
        image: req.file.path,
        patient: req.body.patient

    }
    Doctor.updateOne({ _id: req.params.id }, { $set: newDoctor }).
        then(resault => {
            res.status(200).json({
                massage: 'Doctor updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteDoctor = function (req, res, next) {
    Doctor.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Doctor deleted Successfully',
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
    addDoctor: addDoctor,
    getDoctor: getDoctor,
    updateDoctor: updateDoctor,
    deleteDoctor: deleteDoctor
}
const mongoose = require('mongoose');
const doctorSchema = mongoose.Schema({
    doctor_name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    
    patient: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "Patient"
        },

    ]
});

module.exports = mongoose.model('Doctor', doctorSchema);
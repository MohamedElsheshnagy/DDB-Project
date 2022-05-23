const mongoose = require('mongoose');
const patintSchema = mongoose.Schema({
    patient_name: {
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
    doctor: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        },

    ]
    
   
});

module.exports = mongoose.model('Patient', patintSchema);
const mongoose = require("mongoose");
const Identifier = mongoose.model(
    "Identifier",
    new mongoose.Schema({
      Rosheta: String,
      patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
      }
    })
  );
  module.exports = Identifier;
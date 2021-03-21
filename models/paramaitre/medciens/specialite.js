const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpecialiteSchema = new Schema(
  {
    nom  : {   
        type: String,
        required: true,
      },
  },
  { timestamps: true }
  
);


const Specialite = mongoose.model("Specialite", SpecialiteSchema);

module.exports = Specialite ;
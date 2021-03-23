const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const MedcienSchema = new Schema(
  {
    
    nom : {   
        type: String,
        required: true,
      },
      prenom    : {   
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    telephone : {
        type: String,
        required: true,
      },
    adresse : {
        type: String,
        required: true,
    },
    publication :{
        type: String,
        required: true,
    },
    latitude :{
        type: Number,
        required: true,
    },
    longitude : {
        type: Number,
        required: true,
    },

    secretaireId :{ type: mongoose.Types.ObjectId, ref: "Secretaire" },
    specialiteId:  {type: mongoose.Types.ObjectId, ref: "Specialitmedcin"},
    deligationId: {type: mongoose.Types.ObjectId, ref: "Deligation"},
    governoratId: { type: mongoose.Types.ObjectId, ref: "Gouvernorat" },
    abonnemenId: {type: mongoose.Types.ObjectId, ref: "Abonnement"}
  },
  { timestamps: true }
);

const Medcien = mongoose.model("Medcien", MedcienSchema);

module.exports = Medcien ;
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
        type: String,
        required: true,
    },
    longitude : {
        type: String,
        required: true,
    },
    gouvernorat  : { type: mongoose.Types.ObjectId, ref: "Gouvernorat" },
    secretaireId :{ type: mongoose.Types.ObjectId, ref: "Secretaire" },
    specialite : { type: mongoose.Types.ObjectId, ref: "Specialite" },
    secteur : { type: mongoose.Types.ObjectId, ref: "Secteur" },
  },
  { timestamps: true }
);

const Medcien = mongoose.model("Specialite", MedcienSchema);

module.exports = Medcien ;
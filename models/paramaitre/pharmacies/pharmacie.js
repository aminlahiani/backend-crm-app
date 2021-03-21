const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const PharmacieSchema = new Schema(
  {
    nom : {
      type: String,
      required: true,
    },
    registre_de_commerce : {
      type: String,
      required: true,
    },
    raison_sosial    : {   
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    adresse : {
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
    secteur : { type: mongoose.Types.ObjectId, ref: "Secteur" },
    pharmacienId : { type: mongoose.Types.ObjectId, ref: "Pharmacien" },
    preparateurprincipalId : [{ type: mongoose.Types.ObjectId, ref: "PreparateurPrincipal" } ],
  },
  { timestamps: true }
);


const Pharmacie = mongoose.model("Pharmacie", PharmacieSchema);

module.exports = Pharmacie ;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const SecteurSchema = new Schema(
  {
    nom: {
      type: String,
    },
    nbrmedecins: {
        type: String,
      },
    nbrpharmaciens: {
        type: String
      }
    },
  {
    timestamps: true,
  }
);

const Secteur = mongoose.model("Secteur", SecteurSchema);

module.exports = Secteur;

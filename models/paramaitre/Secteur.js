const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecteurSchema = new Schema(
  {
    nom: {
      type: String,
    },
    productfamilleId: { type: mongoose.Types.ObjectId, ref: "Productfamille" },
    governoratId: { type: mongoose.Types.ObjectId, ref: "Gouvernorat" },
    abonnemenId: {type: mongoose.Types.ObjectId, ref: "Abonnement"}
  },
  {
    timestamps: true,
  }
);

const Secteur = mongoose.model("Secteur", SecteurSchema);

module.exports = Secteur;

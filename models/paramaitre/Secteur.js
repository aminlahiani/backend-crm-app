const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecteurSchema = new Schema(
  {
    nom: {
      type: String,
    },

    famille: { type: mongoose.Types.ObjectId, ref: "Pfamille" },
    Governorat: { type: mongoose.Types.ObjectId, ref: "Governorat" },
  },
  {
    timestamps: true,
  }
);

const Secteur = mongoose.model("Secteur", SecteurSchema);

module.exports = Secteur;

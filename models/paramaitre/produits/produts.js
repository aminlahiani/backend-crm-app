const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProduitSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    designation :{
        type: String,
        required: true,
    },
    prixgrossiste  :{
        type: String,
        required: true,
    },
    Designation :{
        type: String,
        required: true,
    },
    prixpharmacie :{
        type: String,
        required: true,
    },
    famille : {type: mongoose.Types.ObjectId, ref: "Pfamille"},
    etat :{
        type: String,
        required: true,
    }

  },
  {
    timestamps: true,

  }
);

const Pfamille = mongoose.model("Produit", ProduitSchema);

module.exports = Produit;

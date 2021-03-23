const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProduitSchema = new Schema(
  {
    code : {
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
    prixpharmacie :{
        type: String,
        required: true,
    },
    famille : {type: mongoose.Types.ObjectId, ref: "Pfamille"},
    Specialite:  {type: mongoose.Types.ObjectId, ref: "Specialitmedcin"},
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

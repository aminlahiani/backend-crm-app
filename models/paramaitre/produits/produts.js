const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProduitSchema = new Schema(
  {
    nom : {
      type: String,
      required: true,
    },
    code : {
      type: Number,
      required: true,
    },
   
    prixgrossiste  :{
        type: Number,
        required: true,
    },
    prixpharmacie :{
        type: Number,
        required: true,
    },
    etat :{
      type: String,
      required: true,
  },
    familleId : {type: mongoose.Types.ObjectId, ref: "Productfamille"},
    SpecialiteId:  {type: mongoose.Types.ObjectId, ref: "Specialitmedcin"},
    deligationId: {type: mongoose.Types.ObjectId, ref: "Deligation"},
   

  },
  {
    timestamps: true,

  }
);

const Pfamille = mongoose.model("Produit", ProduitSchema);

module.exports = Produit;

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
    abonnemenId: {type: mongoose.Types.ObjectId, ref: "Abonnement"},
   

  },
  {
    timestamps: true,

  }
);

const Produit = mongoose.model("Produit", ProduitSchema);

module.exports = Produit;

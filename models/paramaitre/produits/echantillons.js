const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EchantillonsSchema = new Schema(
    
  {
    nom: {
      type: String,
    },
    qtyresu :{
      type: String,
    },
    produit : {

    },

  },
  {
    timestamps: true,
    // toJSON: {
    //     transform(doc,ret) {
    //         delete ret.password
    //     }
    // }
  }
);

const Echantillons = mongoose.model("Echantillons", EchantillonsSchema);

module.exports = Echantillons;
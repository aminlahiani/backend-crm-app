const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductfamilleSchema = new Schema(
  {
    nom: {
      type: String,
    },
    abonnemenId: {type: mongoose.Types.ObjectId, ref: "Abonnement"},
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

const Productfamille = mongoose.model("Productfamille", ProductfamilleSchema);

module.exports = Productfamille;

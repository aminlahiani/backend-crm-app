const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const abonnementSchema = new Schema(
  {
    Registredecommerce: {
      type: String,
    },
    raisonsosial: {
      type: String,
    },
    logo: {
      type: String,
    },
    telephone: {
      type: String,
    },
    email: {
      type: String,
    },
    datedebut: {
      type: String,
    },
    datafin: {
      type: String,
    },
    etat: {
      type: String,
    },
    gerant: {type: mongoose.Types.ObjectId, ref: "User"}
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

const Abonnement = mongoose.model("Abonnement", abonnementSchema);

module.exports = Abonnement;

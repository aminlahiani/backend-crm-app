const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const abonnementSchema = new Schema(
  {
    raisonsosial: {
      type: String,
    },
    telephone: {
      type: String,
    },
    email: {
      type: String,
    },
    datedebut: {
      type: Date,
      required : true
    },
    datafin: {
      type: Date,
      required : true
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

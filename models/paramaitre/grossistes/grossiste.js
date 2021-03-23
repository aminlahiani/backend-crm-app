const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const GrossisteSchema = new Schema(
  {
    nom : {
      type: String,
      required: true,
    },
 

    adresse : {
      type: String,
      required: true,
    },
    latitude :{
        type: String,
        required: true,
    },
    longitude : {
        type: String,
        required: true,
    },
    GerantId : { type: mongoose.Types.ObjectId, ref: "Gerant" },
    responsble_achatId :{ type: mongoose.Types.ObjectId, ref: "ResponsbleAchat" },
    responsble_paymentId :{ type: mongoose.Types.ObjectId, ref: "ResponsblePayment" },
    gouvernorat  : { type: mongoose.Types.ObjectId, ref: "Gouvernorat" },
    secteur : { type: mongoose.Types.ObjectId, ref: "Secteur" },
    Deligation
  },
  { timestamps: true }
);


const Grossiste = mongoose.model("Grossiste", GrossisteSchema);

module.exports = Grossiste ;
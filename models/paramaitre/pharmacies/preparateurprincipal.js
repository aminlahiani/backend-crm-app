const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PreparateurPrincipalSchema = new Schema(
  {
    nom   : {   
        type: String,
        required: true,
      },
      prenom    : {   
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    telephone : {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
  
);


const PreparateurPrincipal = mongoose.model("PreparateurPrincipal", PreparateurPrincipalSchema);

module.exports = PreparateurPrincipal ;
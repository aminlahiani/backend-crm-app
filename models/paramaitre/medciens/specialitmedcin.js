const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpecialiteSchema = new Schema(
  {
    nom  : {   
        type: String,
        required: true,
      },
   abonnemenId: {type: mongoose.Types.ObjectId, ref: "Abonnement"}
  },
  { timestamps: true }
  
);


const Specialitmedcin = mongoose.model("Specialitmedcin", SpecialiteSchema);

module.exports = Specialitmedcin ;
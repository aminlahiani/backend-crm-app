const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PfamilleSchema = new Schema(
  {
    nom: {
      type: String,
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

const Pfamille = mongoose.model("Pfamille", PfamilleSchema);

module.exports = Pfamille;

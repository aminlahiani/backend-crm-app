const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeligationSchema = new Schema(
  {
    nom: {
      type: String,
    },
    governoratId: { type: mongoose.Types.ObjectId, ref: "Gouvernorat" },
    abonnemenId: {type: mongoose.Types.ObjectId, ref: "Abonnement"}
  },

  {
    timestamps: true,
  }
);

const Deligation = mongoose.model("Deligation", DeligationSchema);

module.exports = Deligation;
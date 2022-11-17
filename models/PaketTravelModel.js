const mongoose = require("mongoose");

const PaketTravelSchema = new mongoose.Schema({
  namaPaket: { type: String },
  tujuan: { type: String },
  asal: { type: String },
  harga: { type: Number },
  jam: { type: String },
  durasi: { type: String },
});

module.exports = mongoose.model("PaketTravel", PaketTravelSchema);

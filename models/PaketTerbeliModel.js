const mongoose = require("mongoose");

const PaketTerbeliSchema = new mongoose.Schema({
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  idPaketTravel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PaketTravel",
  },
  namaPaket: { type: String },
  harga: { type: Number },
  jumlahTiket: { type: Number },
});

module.exports = mongoose.model("PaketTerbeli", PaketTerbeliSchema);

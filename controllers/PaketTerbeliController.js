const PaketTerbeli = require("../models/PaketTerbeliModel.js");

const getPaketTerbelis = async (req, res) => {
  try {
    const paketTerbelis = await PaketTerbeli.find()
      .populate("idUser")
      .populate("idPaketTravel");
    res.json(paketTerbelis);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getPaketTerbelisByUserId = async (req, res) => {
  try {
    const paketTerbelis = await PaketTerbeli.find({ idUser: req.body.idUser })
      .populate("idUser")
      .populate("idPaketTravel");
    res.json(paketTerbelis);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getPaketTerbeliById = async (req, res) => {
  try {
    const paketTerbeli = await PaketTerbeli.findById(req.params.id)
      .populate("idUser")
      .populate("idPaketTravel");
    res.json(paketTerbeli);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const savePaketTerbeli = async (req, res) => {
  const paketTerbeli = new PaketTerbeli(req.body);
  try {
    const insertedPaketTerbeli = await paketTerbeli.save();
    // Status 201 = Created
    res.status(201).json(insertedPaketTerbeli);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updatePaketTerbeli = async (req, res) => {
  try {
    const updatedPaketTerbeli = await PaketTerbeli.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedPaketTerbeli);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deletePaketTerbeli = async (req, res) => {
  try {
    const deletedPaketTerbeli = await PaketTerbeli.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedPaketTerbeli);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPaketTerbelis,
  getPaketTerbelisByUserId,
  getPaketTerbeliById,
  savePaketTerbeli,
  updatePaketTerbeli,
  deletePaketTerbeli,
};

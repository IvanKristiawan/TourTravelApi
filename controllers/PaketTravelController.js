const PaketTravel = require("../models/PaketTravelModel.js");

function getStandardResponse(status, message, data) {
  return {
    status: status,
    message: message,
    data: data,
  };
}

const getPaketTravels = async (req, res) => {
  try {
    const paketTravels = await PaketTravel.find();
    // res.send(paketTravels);
    res.json(getStandardResponse(true, "", paketTravels));
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getPaketTravelById = async (req, res) => {
  try {
    const paketTravel = await PaketTravel.findById(req.params.id);
    // res.json(paketTravel);
    res.json(getStandardResponse(true, "", paketTravel));
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const savePaketTravel = async (req, res) => {
  const paketTravel = new PaketTravel(req.body);
  try {
    const insertedPaketTravel = await paketTravel.save();
    // Status 201 = Created
    res.status(201).json(insertedPaketTravel);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updatePaketTravel = async (req, res) => {
  try {
    const updatedPaketTravel = await PaketTravel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedPaketTravel);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deletePaketTravel = async (req, res) => {
  try {
    const deletedPaketTravel = await PaketTravel.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedPaketTravel);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPaketTravels,
  getPaketTravelById,
  savePaketTravel,
  updatePaketTravel,
  deletePaketTravel,
};

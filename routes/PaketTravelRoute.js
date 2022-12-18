const express = require("express");
const content = require("../controllers/PaketTravelController.js");
const getPaketTravels = content.getPaketTravels;
const getPaketTravelByNamaPaket = content.getPaketTravelByNamaPaket;
const getPaketTravelById = content.getPaketTravelById;
const savePaketTravel = content.savePaketTravel;
const updatePaketTravel = content.updatePaketTravel;
const deletePaketTravel = content.deletePaketTravel;

const router = express.Router();

router.get("/paketTravels", getPaketTravels);
router.get("/paketTravels/:id", getPaketTravelByNamaPaket);
router.post("/paketTravels", savePaketTravel);
router.put("/paketTravels/:idPaket", updatePaketTravel);
router.delete("/paketTravels/:idPaket", deletePaketTravel);

module.exports = router;

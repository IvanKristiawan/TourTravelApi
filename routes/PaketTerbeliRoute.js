const express = require("express");
const content = require("../controllers/PaketTerbeliController.js");
const getPaketTerbelis = content.getPaketTerbelis;
const getPaketTerbelisByUserId = content.getPaketTerbelisByUserId;
const getPaketTerbeliById = content.getPaketTerbeliById;
const savePaketTerbeli = content.savePaketTerbeli;
const updatePaketTerbeli = content.updatePaketTerbeli;
const deletePaketTerbeli = content.deletePaketTerbeli;

const router = express.Router();

router.get("/paketTerbelis", getPaketTerbelis);
router.get("/paketTerbelis/:id", getPaketTerbeliById);
router.post("/userPaketTerbeli", getPaketTerbelisByUserId);
router.post("/paketTerbelis", savePaketTerbeli);
router.patch("/paketTerbelis/:id", updatePaketTerbeli);
router.delete("/paketTerbelis/:id", deletePaketTerbeli);

module.exports = router;

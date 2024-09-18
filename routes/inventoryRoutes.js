const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController
} = require("../controllers/inventoryController");

const router = express.Router();
//add inventory
router.post("/create-inventory", authMiddleware, createInventoryController);
//get blood record
router.get("/get-inventory", authMiddleware, getInventoryController);

//get hospital blood record
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);
//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//get donar record
router.get("/get-donars", authMiddleware, getDonarsController);

//get hospital record
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get organisation record
router.get("/get-organisation", authMiddleware, getOrganisationController);

//get organisation for hospital record
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);
module.exports = router;

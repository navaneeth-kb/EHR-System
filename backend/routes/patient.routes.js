const router = require("express").Router();
const controller = require("../controllers/patient.controller");

router.post("/", controller.createPatient);
router.get("/", controller.getPatients);
router.get("/:id", controller.getPatient);
router.delete("/:id", controller.deletePatient);

module.exports = router;

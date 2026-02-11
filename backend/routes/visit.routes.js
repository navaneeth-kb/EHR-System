const router = require("express").Router();
const controller = require("../controllers/visit.controller");

router.post("/:patientId", controller.addVisit);
router.get("/:patientId", controller.getVisits);
router.delete("/:id", controller.deleteVisit);

module.exports = router;

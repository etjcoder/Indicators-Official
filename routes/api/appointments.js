const router = require("express").Router();
const apptController = require("../../controllers/apptController");

router.route("/schedule")
    .post(apptController.createAppt)
    .get(apptController.findAppts)

router.route("/edit/:id")
    .put(apptController.updateAppt)
    .delete(apptController.deleteAppt)

module.exports = router;
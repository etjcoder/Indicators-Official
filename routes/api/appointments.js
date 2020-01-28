const router = require("express").Router();
const apptController = require("../../controllers/apptController");

router.route("/schedule")
    .post(apptController.createAppt)
    .get(apptController.findAppts)

router.route("/weekly/:id")
    .get(apptController.findWeeklyApptsById)

router.route("/monthly/:id")
    .get(apptController.findMonthlyApptsById)
    
router.route("/find/:id")
    .get(apptController.findUserAppts)

router.route("/edit/:id")
    .put(apptController.updateAppt)
    .delete(apptController.deleteAppt)

module.exports = router;
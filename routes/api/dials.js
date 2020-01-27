const router = require("express").Router();
const dialController = require("../../controllers/dialController");

router.route("/session")
    .get(dialController.findDials)
    // .post(dialController.createDial)

router.route("/session/:id")
    .post(dialController.createDial)

router.route("/weekly/:id")
    .get(dialController.findWeeklyDialsById)

router.route("/contacts/:id")
    .get(dialController.findContacts)

router.route("/appt/:id")
    .post(dialController.createAppointment)

router.route("/appt/mentor/:id")
    .post(dialController.createMentorAppt)
        
router.route("/sales")
    .post(dialController.createSale)

router.route("/sales/:id")
    .get(dialController.getProtegeSalesById)
    .put(dialController.updateSale)
    .delete(dialController.deleteSale)

router.route("/mentor/sales")
    .post(dialController.createMentorSale)

router.route("/mentor/sales/:id")
    .get(dialController.findMentorSalesById)

router.route("/mentor/appts/:id")
    .get(dialController.findMentorApptsById)

module.exports = router;
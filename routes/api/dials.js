const router = require("express").Router();
const dialController = require("../../controllers/dialController");

router.route("/session")
    .get(dialController.findDials)
    // .post(dialController.createDial)

router.route("/session/:id")
    .post(dialController.createDial)

router.route("/contacts/:id")
    .get(dialController.findContacts)

router.route("/appt/:id")
    .post(dialController.createAppointment)

module.exports = router;
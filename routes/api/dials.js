const router = require("express").Router();
const dialController = require("../../controllers/dialController");

router.route("/session")
    .get(dialController.findDials)
    // .post(dialController.createDial)

router.route("/session/:id")
    .post(dialController.createDial)

module.exports = router;
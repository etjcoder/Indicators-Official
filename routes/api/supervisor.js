const router = require("express").Router();
const supervisorController = require("../../controllers/supervisorController");

router.route("/protege")
    .post(supervisorController.createProtege)
    .get(supervisorController.findProteges)

router.route("/user/:id")
    .get(supervisorController.findUser)

router.route("/mentor")
    .post(supervisorController.createMentor)


module.exports = router;
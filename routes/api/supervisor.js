const router = require("express").Router();
const supervisorController = require("../../controllers/supervisorController");

router.route("/protege")
    .post(supervisorController.createProtege)
    .get(supervisorController.findProteges)

router.route("/protege/:id")
    .get(supervisorController.findProtege)

router.route("/user/:id")
    .get(supervisorController.findUser)

router.route("/mentor")
    .post(supervisorController.createMentor)

router.route("/mentor/:id")
    .get(supervisorController.findMentor)


module.exports = router;
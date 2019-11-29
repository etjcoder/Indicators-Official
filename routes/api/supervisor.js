const router = require("express").Router();
const supervisorController = require("../../controllers/supervisorController");

router.route("/protege")
    .post(supervisorController.createProtege)

router.route("/user/:id")
    .get(supervisorController.findUser)


module.exports = router;
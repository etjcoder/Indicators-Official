const router = require("express").Router();
const supervisorController = require("../../controllers/supervisorController");

router.route("/protege")
    .post(supervisorController.createProtege)
    .get(supervisorController.findProteges)

router.route("/protege/:id")
    .get(supervisorController.findProtege)

router.route("/user/:id")
    .get(supervisorController.findUser)

router.route("/userdata/:id")
    .get(supervisorController.findProtegeById)

router.route("/mentor")
    .post(supervisorController.createMentor)
    .get(supervisorController.findAllMentors)

router.route("/mentor/:id")
    .get(supervisorController.findMentor)

router.route("/mentor/find/:id")
    .get(supervisorController.findMentorById)
    .put(supervisorController.pushProtegeToMentor)
    .delete(supervisorController.pullProtegeFromArray)

router.route("/protege/find/:id")
    .put(supervisorController.pushMentorToProtege)
    .delete(supervisorController.pullMentorFromArray)

router.route("/mentor/notes/:id")
    .get(supervisorController.findMentorNotes)
    .post(supervisorController.createMentorNote)

module.exports = router;
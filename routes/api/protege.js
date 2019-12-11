const router = require("express").Router();
const protegeController = require("../../controllers/protegeController");

router.route("/sources/:id")
    .post(protegeController.addSource)

router.route("/targets/:id")
    .post(protegeController.addTargetMkt)
    
router.route("/note/:id")
    .post(protegeController.createNote)
    .put(protegeController.completeNote)
    .delete(protegeController.deleteNote)


module.exports = router;
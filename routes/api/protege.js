const router = require("express").Router();
const protegeController = require("../../controllers/protegeController");

router.route("/sources/:id")
    .post(protegeController.addSource)

router.route("/targets/:id")
    .post(protegeController.addTargetMkt)
    


module.exports = router;
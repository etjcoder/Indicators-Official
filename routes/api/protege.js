const router = require("express").Router();
const protegeController = require("../../controllers/protegeController");

router.route("/sources/:id")
    .post(protegeController.addSource)
    


module.exports = router;
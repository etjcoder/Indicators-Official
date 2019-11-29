const router = require("express").Router();
const bookRoutes = require("./books");
const dialRoutes = require("./dials");
const apptRoutes = require("./appointments");
// const protegeRoutes = require("./protege");
const supervisorRoutes = require("./supervisor");


// Book routes
router.use("/books", bookRoutes);
router.use("/dials", dialRoutes);
router.use("/appointments", apptRoutes);
// router.use("/protege", protegeRoutes);
router.use("/supervisor", supervisorRoutes);


module.exports = router;
const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

// google router
router
.route("/")
.get


module.exports = router;

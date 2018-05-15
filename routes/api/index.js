const router = require("express").Router();
const bookRoutes = require("./books");

// Uses bookroutes on route "/books"
router.use("/books", bookRoutes);

module.exports = router;

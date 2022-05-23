const express = require("express");
//getting the router for the webpages.
const router = express.Router();

router.get("/", (req, res) => {
    // res.send("<h1>Hi web server is running</h1>");
    res.render("./pages/loading");
    
});
// Render index pages
router.get("/index", (req, res) => {
    res.render("./pages/index");
});

  









  module.exports = router;
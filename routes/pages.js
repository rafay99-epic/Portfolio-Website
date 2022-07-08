const express = require("express");
//getting the router for the webpages.
const router = express.Router();

router.get("/", (req, res) => {
    res.render("./pages/loading");
    
});

router.get("/index", (req, res) => {
    res.render("./pages/index");
});

router.get("/login", (req, res) => {
    res.render("./login/login");
});




// router.get("/dashboard", (req, res) => {
//     res.render("./pages/dashboard");
// });
// router.get("/service",(req, res) => {
//     res.render("./pages/service");
// });  
// router.get("/login",(req, res) => {
//     res.render("./pages/login");
// });
// router.get("/blog",(req, res) => {
//     res.render("./pages/blog");
// });








  module.exports = router;
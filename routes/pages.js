const express = require("express");
//getting the router for the webpages.
const router = express.Router();

//this will render the loading screen page
router.get("/", (req, res) => {
    res.render("./pages/loading");
    
});

//this will render the index pages
router.get("/index", (req, res) => {
    res.render("./pages/index");
});

//yhis will render to the login pages
router.get("/login", (req, res) => {
    res.render("./login/login");
});

//this will render the portfolio-details pages
router.get("/portfolio-web", (req, res) => {
    res.render("portfolio-details/portfolio-web");
});
router.get("/portfolio-script", (req, res) => {
    res.render("portfolio-details/portfolio-script");
});
router.get("/portfolio-web", (req, res) => {
    res.render("portfolio-details/portfolio-apps");
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
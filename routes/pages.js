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

//this will rendeer the dashboard for the admin pages
router.get("/dashboard", (req, res) => {
    res.render("./login/dashboard");
});


router.get("/blog", (req, res) => {
    res.render("./blog/blog");
});

//this will render the portfolio-details pages

//this will render the web project called Smart Parking assistant
router.get("/portfolio-web", (req, res) => {
    res.render("portfolio-details/portfolio-web");
});

//This will render the runner game
router.get("/portfolio-apps-run-game", (req, res) => {
    res.render("portfolio-details/portfolio-apps-run-game");
});
//this will render the application called: "Application Installer for Linux"
router.get("/portfolio-apps-application-installer", (req, res) => {
    res.render("portfolio-details/portfolio-apps-application-installer");
});
//this will render the virus killing game
router.get("/portfolio-apps-virus-killer", (req, res) => {
    res.render("portfolio-details/portfolio-apps-virus-killer");
});

//this will render the script bot detail.
router.get("/portfolio-script-bot-class", (req, res) => {
    res.render("portfolio-details/portfolio-script-bot-class");
});

//this will render the update script script detail page
router.get("/portfolio-script-update-system", (req, res) => {
    res.render("portfolio-details/portfolio-script-update-system");
});

router.get("/portfolio-script-terminal-config", (req, res) => {
    res.render("portfolio-details/portfolio-script-terminal-config");
});
router.get("/one-power-detail", (req, res) => {
    res.render("portfolio-details/one-power-detail");
});
router.get("/dashboard", (req, res) => {
    res.render("./login/dashboard");
});





  module.exports = router;
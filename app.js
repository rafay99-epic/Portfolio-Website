//Calling Express Module
const express = require('express');
const path = require('path');

//Setting Express Server
var app = express();

//This will render the images from public folder
app.use(express.static("image"));
app.get("/static", (req, res) => {
  res.render("static");
});
// Set public folder
const publicDirectory = path.join(__dirname, "./assets");
app.use(express.static(publicDirectory));
//Get Jason Data format
app.use(express.json());

//Set Html Template
// app.engine('html', cons.swig)
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

//Router to diffeent pages render
app.use("/", require("./routes/pages"));


app.listen(8080, () => {
    console.log("Node Server is running at port 8080");
  });

  //render Html Pages
  // var cons = require('consolidate');
  // app.engine('html', cons.swig)
//app.set('views', __dirname + '/views');
//app.set("view engine", "html");
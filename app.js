//Calling Express Module
const express = require('express');
const path = require('path');
// const db = require('./database/connection');
const articleRouter= require('./routes/articles');
const bodyParser = require("body-parser");

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

// This will use the router for the blog page
app.use('/articles', articleRouter);

app.get("/blog", (req, res) => {
  articles=[{
    title: 'test articles',
    createAt: Date.now(),
    description: 'test description'
  }]
  res.render("./articles/index", {articles: articles } );
});


// use the Passthrough data into the form of Jason Pattern
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Port Number
app.listen(8080, () => {
    console.log("Node Server is running at port 8080");
  });

  //render Html Pages
  // var cons = require('consolidate');
  // app.engine('html', cons.swig)
//app.set('views', __dirname + '/views');
//app.set("view engine", "html");
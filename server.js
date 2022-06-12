// Load express
const express = require('express');


const getData = require("./Controllers/getData");
const Products = require('./Models/Students');

// call getData
const storeData = getData();

// Create our express app
const app = express();
const PORT = 3003


app.use((req, res, next) => {
  console.log(`Running middleware function!!!`);
  next(); // got to the next middleware or to the response
});

// JSON Middleware
app.use(express.json())
// if we dont need to read data from the url 
app.use(express.urlencoded({extended: false}))

// Setup view engine
app.set("view engine", "ejs");
app.set("views", "./Views");

// Define a "root" route directly on app
//* ==== Two Templates 
app.get('/', function (req, res) {
  res.render("home", {
    pageTitle: "Students info",
    pageHeader: "Student info by Id or sort",
  });
});

app.get('/search', (req,res) => {
  res.render("home", {
   
  })
})

// display all products
app.get('/search/', (req, res) => { 
  res.render("home", { data: storeData, pageTitle: "Products Page" });

});

//* ==== 10 Routes 
// Search by product id
app.get('/search/:id', (req,res) => {
  console.log(req.params);
  const result = products.filter(item => item.id === (req.params.id))

  res.render('studentsId', {product: result[0]})
})

app.get('/search/:name', (req,res) => {
  console.log(rq.params);
  const result = prodcuts.filter(item => item.id === (req.params.id))

  res.render('studentName', {name: result[0]})
})

app.get('/search/:username', (req,res) => {

})

app.get('/search/:email', (req, res) => {

})

app.get('/search/:address', (req, res) => {

})

app.get('/search/:geolocation', (req, res) => {

})

app.get('/search/:phone', (req, res) => {

})

app.get('/search/:website', (req,res) => {

})

app.get('/search/:company', (req,res) => {

})

app.get('/search/:city', (req, res) => {
  
})

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(PORT, function () {
  console.log('Listening on port 3003');
});
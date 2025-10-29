// Create a new router
const express = require("express");
const router = express.Router();
var shopData = {shopName:"DrinkDrinkDrink",
    productCategories:["Beer","Wine","Soft Drinks","Hot Drinks"],
    shops:[
        {location:"New Cross", manager:"Cassia", address:"13 xxpath"},
        {location:"Greemwich", manager:"Adeliade", address:"26 xxpath"}
    ]
};

// Handle the main routes
router.get('/',function(req,res){
        res.render('index.ejs', shopData)
     });
    
router.get("/about", (req, res) => {
    res.render("about.ejs",shopData)
}); 
router.get("/search", (req, res) => {
    res.render("search.ejs",shopData)
}); 
router.get('/search_result',function(req,res){
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);;
})

router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered! We will send an email to you at ' + req.body.email + '!'); 
}); 

router.get("/survey", (req, res) => {
    res.render("survey.ejs", {
      shopName: shopData.shopName,
      productCategories: shopData.productCategories,
    });
  });
  
  router.post("/survey_submitted", (req, res) => {
    const data = {
      firstName: req.body.first_name,
      surname: req.body.surname,
      email: req.body.email ,
      age: req.body.age,
      category: req.body.category,
      isStudent: !!req.body.is_student,
    };
    res.render("survey_result.ejs", {
      shopName: shopData.shopName,
      data,
    });
  });
// TODO

// Export the router object so index.js can access it
module.exports = router;

var express = require('express')
var app = express();
var fs = require("fs");

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var router = express.Router();
var path = __dirname+'/views/';

app.set('port',(process.env.PORT || 8080));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/stripe",function(req,res){
  res.sendFile(path + "stripe.html");
});

router.get("/blog",function(req,res){
  res.sendFile(":5000");
})

router.post("/payment",function(req,res){

  var stripe = require("stripe")("sk_test_5uIiKilJCUccpVayx0ibe6vZ");

  // Get the credit card details submitted by the form
  console.log(req);
  var token = req.body.stripeToken; // Using Express
  console.log("Token:"+token);
  /*
  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
    amount: 1000, // Amount in cents
    currency: "usd",
    source: token,
    description: "Example charge",
    metadata: {email: req.body.email, name: req.body.name}
  }, function(err, charge) {
    console.log("err:"+err);
    if (err) {
      // The card has been declined
    } else {
      res.sendFile(path+"success.html");
    }
  });*/

  // Create customer
  stripe.customers.create({
    email: req.body.email,
    source:token,
  }).then(function(customer){
    //add website code

    var charge = stripe.charges.create({
      amount:1000,
      currency:"usd",
      customer:customer.id,
    });

    console.log("charge:"+charge);
  }).then(function(charge){
      res.send("Successful Transaction");
      console.log("string sent");
      //res.sendFile(path+"success.html");
    }, function(err){
    console.log("errorrorororor");
  });

});


app.use(express.static('assets'));

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'),function(){
  console.log("App is running on", app.get('port'));
});

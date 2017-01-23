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

router.get("/apps",function(req,res){
  res.sendFile(path + "apps.html");
});

router.get("/blog",function(req,res){
  res.sendFile(":5000");
})

router.post("/payment",function(req,res){
  console.log("Token:"+token);

  var stripe = require("stripe")("sk_test_5uIiKilJCUccpVayx0ibe6vZ");

  // Get the credit card details submitted by the form
  var token = req.body.stripeToken; // Using Express
  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
    amount: 1000, // Amount in cents
    currency: "usd",
    source: token,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
    }
  });
  res.sendFile(path+"success.html");
});

app.use(express.static('assets'));

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'),function(){
  console.log("App is running on", app.get('port'));
});

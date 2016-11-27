// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_5uIiKilJCUccpVayx0ibe6vZ");

// Get the credit card details submitted by the form
var token = request.body.stripeToken; // Using Express

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

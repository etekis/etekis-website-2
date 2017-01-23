var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': 'cUiYpj6gLoDdfWLH',
  'apiSecret': 'EmO8boeqG7Cd12YGpmyGOy1o6wOOmCOQ',
});

client.getAccounts({}, function(err, accounts) {
  accounts.forEach(function(acct) {
    console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
  });
});

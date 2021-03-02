const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live 
    'client_id': process.env.CLIENT_ID, // please provide your client id here 
    'client_secret': process.env.CLIENT_SECRET // provide your client secret here 
  });



  module.exports = paypal
  
  
const paypal = require("../apis/paypal");
const PaymentModel = require("../models/PaymentsModel");
const RegisterUser = require("../models/RegisterUserModel");

exports.OnPaymentSuccess = (req, res, next)=>{
//Execute payment
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
        const token = req.query.token

PaymentModel.findOne({CheckoutToken:token})
.then(findToken=>{
    if(findToken){
        console.log(payerId)
        console.log(paymentId)
        console.log(token)
        console.log(findToken)

        findToken.checkIfPaid = true
        findToken.save()

        const execute_payment_json = {
          "payer_id": payerId,
          "transactions": [{
              "amount": {
                  "currency": "EUR",
                  "total": findToken.ProductPrice
              }
          }]
        };
    
        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(JSON.stringify(payment));
                res.send('Success');
            }
        });
   
    }
})
.catch(err=>{
    console.log(err)
})

      
}


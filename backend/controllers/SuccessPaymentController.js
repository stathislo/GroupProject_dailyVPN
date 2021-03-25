const paypal = require("../apis/paypal");
const PaymentModel = require("../models/PaymentsModel");
const transporter = require("../apis/sendgrid")
const RegisterUser = require("../models/RegisterUserModel")

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
                if(findToken.checkIfPaid===true){
                    RegisterUser.findOne({email:findToken.email})
                    .then(ifIsPaid=>{
                        console.log(ifIsPaid)
                        console.log(ifIsPaid.email)
                        transporter.sendMail({
                            to:ifIsPaid.email,
                            from:"info@vpndaily.eu",
                            subject:"Complete Registration",
                            html:`
                            <p>Confirm your email by this <a href="http://localhost:3000/registerget/${ifIsPaid.RegisterToken}">Link</a></p>
                            `
                        })
                    })
                }
                res.status(201).send('Success payment, please check your email');
            }
        });
   
    }
})
.catch(err=>{
    console.log(err)
})

      
}


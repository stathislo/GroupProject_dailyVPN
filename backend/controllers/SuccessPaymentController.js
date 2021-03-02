const paypal = require("../apis/paypal")

exports.OnPaymentSuccessOfProductLow = (req, res, next)=>{
//Execute payment

        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        console.log(payerId)
        console.log(paymentId)
      
        const execute_payment_json = {
          "payer_id": payerId,
          "transactions": [{
              "amount": {
                  "currency": "EUR",
                  "total": "1.99"
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


exports.OnPaymentSuccessOfProductMedium = (req, res, next)=>{
    //Execute payment
    
            const payerId = req.query.PayerID;
            const paymentId = req.query.paymentId;
    
            console.log(payerId)
            console.log(paymentId)
          
            const execute_payment_json = {
              "payer_id": payerId,
              "transactions": [{
                  "amount": {
                      "currency": "EUR",
                      "total": "5.99"
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

exports.OnPaymentSuccessOfProductHigh = (req, res, next)=>{
    
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    console.log(payerId)
    console.log(paymentId)
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "EUR",
              "total": "10.99"
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
    
const ProductModel = require("../models/ProductsModel")
const PaymentsModel = require("../models/PaymentsModel")
const RegisterUserModel = require("../models/RegisterUserModel")
const paypal = require("../apis/paypal")
const PaymentModel = require("../models/PaymentsModel")



exports.getPayment= (req, res, next)=>{
    //starts payment proccess
    ProductModel.findOne({_id:req.body.productId})
    .then(resultPay=>{
        if(resultPay){
            // console.log(resultPay)
        var payment = {
            intent: "authorize",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://localhost:5000/success/",
            cancel_url: "http://localhost:3000/err"
        },
        transactions: [{
            amount: {
                total: resultPay.price,
                currency: "EUR"
            },
            description: resultPay.name
        }]
    }
    console.log(payment)
    console.log(req.session.user)
    console.log(resultPay._id)
 



    var createPay = ( payment ) => {
        return new Promise( ( resolve , reject ) => {
            paypal.payment.create( payment , function( err , payment ) {
             if ( err ) {
                 reject(err); 
             }
            else {
                resolve(payment); 
                console.log(payment)
                
            }
            }); 
        });
    }	


    createPay( payment ) 
        .then( ( transaction ) => {
            var id = transaction.id; 
            var links = transaction.links;
            var counter = links.length; 
            while( counter -- ) {
                if ( links[counter].method == 'REDIRECT') {
					// redirect to paypal where user approves the transaction 
                   var getToken = links[counter].href.slice(74,94)

                   const getPaymentsToDB = new PaymentModel({
                    ProductId:resultPay._id, 
                    ProductName:resultPay.name, 
                    ProductPrice:resultPay.price,
                    ProductStartDate:resultPay.start_date,
                    ProductEndDate:resultPay.end_date,
                    CheckoutToken:getToken,
                    email:req.body.email,
                    userId:req.body.userId
                })
            
                PaymentModel.create(getPaymentsToDB, function(err, resultOfPayments){
                    if(err){
                        console.log(err)
                    }else{
                        console.log(resultOfPayments)
                    }
                })
                   console.log(resultPay)
                    return res.json( links[counter].href )
                }
            }
        })
        .catch( ( err ) => { 
            console.log( err ); 
            res.redirect('/err');
        });

        }else{
            console.log("den iparxei")
        }
    })

    .catch(err=>{
        console.log(err)
    })
}


exports.CancelPayment= (req, res, next)=>{
    res.send("Payment Canceled!")
}
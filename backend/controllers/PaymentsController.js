const ProductModel = require("../models/ProductsModel")
const paypal = require("../apis/paypal")

exports.getPaymentProductLow= (req, res, next)=>{
    //starts payment proccess
    ProductModel.findOne({_id:req.body.productId})
    .then(resultPay=>{
        if(resultPay){
            console.log(resultPay)
            var payment = {
                intent: "authorize",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://localhost:5000/success/productlow",
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
    console.log(payment.transactions)

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

exports.getPaymentProductMedium = (req, res, next)=>{
    ProductModel.findOne({_id:req.body.productId})
    .then(resultPay=>{
        if(resultPay){
            console.log(resultPay)
            var payment = {
                intent: "authorize",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://localhost:5000/success/productmedium",
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
    console.log(payment.transactions)

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

exports.getPaymentProductHigh = (req, res, next)=>{
    ProductModel.findOne({_id:req.body.productId})
    .then(resultPay=>{
        if(resultPay){
            console.log(resultPay)
            var payment = {
                intent: "authorize",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://localhost:5000/success/producthigh",
            cancel_url: "http://localhost:3000/cancel"
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
    console.log(payment.transactions)

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

exports.getCanceledPayment = (req, res, next)=>{
    res.send("Payment Canceled!")
}
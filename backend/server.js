require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.SERVER_PORT;
const db = require("./lib/db")
const bodyParser = require("body-parser")
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const cors = require("cors")
const transporter = require("./apis/sendgrid")
const paypal = require("./apis/paypal")
const pusher = require("./apis/pusher")


const store = new MongoDBStore({
    uri:process.env.DB_URI,
    collection:"sessions"
})

app.use(session({
    secret:"vpndaily",
    saveUninitialized:false,
    resave:false,
    store:store,
    cookie:{maxAge:17760000}
}))

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

//Routes
const RegisterRouter = require("./routers/RegisterRouter")
const LoginRouter = require("./routers/LoginRouter")
const LogoutRouter = require("./routers/LogoutRouter")
const ForgotRouter = require("./routers/ForgotRouter")
const ProductCreateRouter = require("./routers/ProductCreateRouter")
const ProductFindRouter = require("./routers/ProductFindRouter")
const IndexRouter = require("./routers/IndexRouter")
const MainRouter = require("./routers/MainRouter")
const AdminRouter = require("./routers/AdminRouter")
const PaymentRouter = require("./routers/PaymentsRouter")
const SuccessPaymentRouter = require("./routers/SuccessPaymentRouter")



//Use of Routes
app.use(RegisterRouter)
app.use(LoginRouter)
app.use(LogoutRouter)
app.use(ForgotRouter)
app.use(ProductCreateRouter)
app.use(ProductFindRouter)
app.use(IndexRouter)
app.use(MainRouter)
app.use(AdminRouter)
app.use(PaymentRouter)
app.use(SuccessPaymentRouter)



app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Backend Server is listening on port ${PORT}`)
    }
})
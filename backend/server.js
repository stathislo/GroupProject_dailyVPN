const express = require("express");
const app = express();
const PORT = 5000;
const db = require("./lib/db")
const bodyParser = require("body-parser")
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const cors = require("cors")


const store = new MongoDBStore({
    uri:"mongodb+srv://alex42q:Alexis42q@cluster0.8nx6m.mongodb.net/vpndaily?retryWrites=true&w=majority",
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




//Use of Routes
app.use(RegisterRouter)
app.use(LoginRouter)
app.use(LogoutRouter)
app.use(ForgotRouter)
app.use(ProductCreateRouter)
app.use(ProductFindRouter)
app.use(IndexRouter)



app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Backend Server is listening on port ${PORT}`)
    }
})
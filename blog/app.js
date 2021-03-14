const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv/config');
const cors = require("cors")
const MongoDBStore = require("connect-mongodb-session")(session)
const PORT = 7000;


const store = new MongoDBStore({
  uri:process.env.VPNDAILY_URI,
  collection:"sessions"
})

app.use(
  session({
    secret: 'vpndaily"',
    saveUninitialized: false,
    resave: false,
    store:store,
    cookie: { maxAge: 17760000 },
  }),
);


app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials:true,
  optionsSuccessStatus:204
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }))

// Import Routes
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const reactionRoute = require('./routes/reaction');
const CategoryRoute = require("./routes/Categories")
const SearchRouter = require("./routes/SearchRouter")



app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/posts', postsRoute);
app.use('/user', userRoute);
app.use('/reaction', reactionRoute);
app.use(CategoryRoute)
app.use(SearchRouter)

// Connect To DB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Backend Server is listening on port ${PORT}`);
  }
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv/config');
const cors = require("cors")
const PORT = 7000;

app.use(bodyParser.json());

app.use(
  session({
    secret: 'stroumf',
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 17760000 },
  }),
);

app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials:true,
  optionsSuccessStatus:204
}))

// Import Routes
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const reactionRoute = require('./routes/reaction');

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/posts', postsRoute);
app.use('/user', userRoute);
app.use('/reaction', reactionRoute);

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

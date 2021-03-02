const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "Mongo Error"))

module.exports = db
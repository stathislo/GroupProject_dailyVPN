const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/vpndaily", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "Mongo Error"))

module.exports = db
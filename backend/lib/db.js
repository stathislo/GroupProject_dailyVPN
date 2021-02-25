const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://alex42q:Alexis42q@cluster0.8nx6m.mongodb.net/vpndaily?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "Mongo Error"))

module.exports = db
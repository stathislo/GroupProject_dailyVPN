const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key :"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"
    }
}))


module.exports = transporter

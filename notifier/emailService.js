const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    auth: {
        user: 'avijeetnair.avj@gmail.com',
        pass: 'dcjitchctpnxrcta'
    }
})
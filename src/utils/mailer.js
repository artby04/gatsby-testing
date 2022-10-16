require("dotenv").config()
const nodeMailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "a.s.yarmoluk@gmail.com",
    pass: "Cblgkdytth1r04",
  },
})

var mailOptions = {
  from: "a.s.yarmoluk@gmail.com",
  to: "a.s.yarmoluk@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log("Email sent: " + info.response)
  }
})

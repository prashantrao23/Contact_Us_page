const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sender_mail@email.com',
    pass: 'mail_password'
  }
});

router.post('/api', function (req, res) {

  var mailOptions = {
    from: 'sender_mail@email.com',
    to: 'reciever_mail@email.com',
    subject: 'Sending Email using Angular and Node.js',
    // text: `Email from ${req.body.fname} ${req.body.lname}.Email id ${req.body.email} message:${req.body.message}`,
    html: `<div>
    <h4>${req.body.fname} ${req.body.lname}</h4><p>has contacted you from the website.</p>
    <h5>His details are</h5>
    <p>First Name: <span>${req.body.fname}</span></p>
    <p>Last Name: <span>${req.body.lname}</span></p>
    <p>Email: <span>${req.body.email}</span></p>
    <p>Message: <span>${req.body.message}</span></p>
    </div>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  
});





module.exports = router;

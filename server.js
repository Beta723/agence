const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Email sending route
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email service
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ecommerce2325@gmail.com',  // Your Gmail address
      pass: 'xdct kalb dokq xdbt',    // Your Gmail password
    },
  });

  // Email options
  let mailOptions = {
    from: email, // Sender's email
    to: 'sirani12@yahoo.fr',  // Your email (where you want to receive the form data)
    subject: `Message from ${name}`,
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Message envoyé!');
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});

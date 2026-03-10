const nodemailer = require("nodemailer");

const createTransporter = () => {

  const transporter = nodemailer.createTransport({

    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // vrai si port 465

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }

  });

  return transporter;

};

module.exports = createTransporter;

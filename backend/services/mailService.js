const createTransporter = require("../config/mail");

const sendMail = async (options) => {

    const transporter = createTransporter();
    await transporter.sendMail(options);

};

module.exports = sendMail;
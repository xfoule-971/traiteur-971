const createPaymentLink = require("./stripeService");
const sendMail = require("./mailService");

const handleDevis = async (data)=>{

    const acompte = data.budget * 0.3 * 100;

    const paymentLink = await createPaymentLink(acompte,"Acompte devis traiteur");

    await sendMail({

        from:process.env.SMTP_USER,
        to:process.env.MAIL_TO,

        subject:"Nouvelle demande de devis",

        html:`
        <h2>Nouveau devis</h2>

        <p>Nom : ${data.name}</p>
        <p>Email : ${data.email}</p>
        <p>Prestation : ${data.prestations}</p>

        <h3>Payer l'acompte</h3>

        <a href="${paymentLink}">
        Payer l'acompte
        </a>
        `

    });

};

module.exports = handleDevis;
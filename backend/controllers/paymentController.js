const stripe = require("../config/stripe");

/* Créer une session de paiement Stripe */
const createCheckoutSession = async (req, res, next) => {

    try {

    const { amount, description } = req.body;

    if (!amount) {
        return res.status(400).json({
            success:false,
            message:"Montant manquant"
        });
    }

    const session = await stripe.checkout.sessions.create({

    payment_method_types: ["card"],

    line_items: [
        {
            price_data: {
                currency: "eur",
                product_data: {
                    name: description || "Acompte traiteur"
                },
                unit_amount: amount
            },
            quantity: 1
        }
    ],

    mode: "payment",

    success_url: `${process.env.FRONTEND_URL}/success`,
    cancel_url: `${process.env.FRONTEND_URL}/cancel`

    });

    res.json({
        success:true,
        url: session.url
    });

    } catch (error) {

        next(error);

    }

};

/* Webhook Stripe confirmation paiement */
const stripeWebhook = async (req, res) => {

    const event = req.body;

    switch (event.type) {

        case "checkout.session.completed":

        const session = event.data.object;

        console.log("Paiement confirmé :", session);

        break;

        default:
        console.log(`Event non géré ${event.type}`);

    }

    res.json({ received: true });

};

module.exports = {
    createCheckoutSession,
    stripeWebhook
};
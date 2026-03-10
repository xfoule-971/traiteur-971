const stripe = require("../config/stripe");

const createPaymentLink = async (amount, description) => {

    const session = await stripe.checkout.sessions.create({

        payment_method_types:["card"],

        line_items:[
            {
                price_data:{
                    currency:"eur",
                    product_data:{ name:description },
                    unit_amount: amount
                },
                quantity:1
            }
        ],

        mode:"payment",

        success_url:`${process.env.FRONTEND_URL}/success`,
        cancel_url:`${process.env.FRONTEND_URL}/cancel`

    });

    return session.url;

};

module.exports = createPaymentLink;
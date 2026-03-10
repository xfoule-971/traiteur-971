
const createPayment = require("../services/stripeService");
const sendMail = require("../services/mailService");

const devis = async(req,res)=>{

try{

const data=req.body;

const stripeLink = await createPayment(5000,data.email);

await sendMail(data,stripeLink);

res.json({message:"Email avec paiement envoyé"});

}catch(err){

console.error(err);
res.status(500).json({message:"Erreur serveur"});

}

};

module.exports=devis;

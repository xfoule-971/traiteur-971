const validateDevis=(req,res,next)=>{

    const {name,email,prestations,budget}=req.body;

    if(!name || !email || !prestations || !budget){

        return res.status(400).json({
            message:"Champs devis manquants"
        });

    }

    next();

};

module.exports=validateDevis;
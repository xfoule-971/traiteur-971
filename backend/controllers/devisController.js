const handleDevis = require("../services/devisService");

const createDevis = async(req,res,next)=>{

    try{

        await handleDevis(req.body);

        res.json({
        success:true,
        message:"Devis envoyé"
        });

        }catch(err){
        next(err);
    }

};

module.exports={createDevis};
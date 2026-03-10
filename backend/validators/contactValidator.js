const validateContact=(req,res,next)=>{

const {name,email,message}=req.body;

    if(!name || !email || !message){

        return res.status(400).json({
            message:"Tous les champs sont obligatoires"
        });

    }

    next();

};

module.exports=validateContact;
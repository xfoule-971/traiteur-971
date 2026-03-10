const sendMail = require("../services/mailService");

const sendContact = async(req,res,next)=>{

    try{

    const {name,email,message}=req.body;

    await sendMail({

        from:process.env.SMTP_USER,
        to:process.env.MAIL_TO,

        subject:"Message site traiteur",

        html:`
        <p>Nom : ${name}</p>
        <p>Email : ${email}</p>
        <p>${message}</p>
        `

    });

    res.json({success:true});

    }catch(err){
    next(err);
    }

};

module.exports={sendContact};
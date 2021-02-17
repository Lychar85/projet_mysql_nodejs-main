//-------------------------------------------Page de connexion----------------------------------------//

const { query } = require("express")

//GET
exports.getLoginPage = (req,res) =>{

    return res.render('login')
}

//-------------------------------------------Page d'inscription----------------------------------------//
//GET
exports.getRegisterPage = (req,res) =>{

    return res.render('register')
}


//POST 
exports.postRegisterPage = (req,res) =>{

    const {firstname,lastname,email,password} = req.body

    //si l'email existe
    const findEmail = await querysql('SELECT count(*) AS cnt from user where email = ?', email)
    console.log(findEmail);
}
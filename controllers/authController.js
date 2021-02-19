//-------------------------------------------Page de connexion----------------------------------------//
const bcrypt = require('bcrypt')
const { query } = require("express")

//GET
exports.getLoginPage = (req,res) =>{

    return res.render('login',{message: req.flash("message")})
}

//POST 
exports.postLoginPage = async (req,res) =>{
    const {email, password} = req.body

    //si l'email existe pas 
    const findEmail = await querysql('SELECT count(*) AS cnt from user where email = ?', email)
    if (!findEmail[0].cnt > 0){
        req.flash("message", "L'adresse email n'est pas valide")
        return res.redirect('/auth/login')
    }

    //si l'email existe
    //vérifier le mot de passe
    const user = await querysql('SELECT userID, firstname, lastname, email, password from user where email = ?', email)
    const passwordCheck = await bcrypt.compare(password,user[0].password)
        if(!passwordCheck){
            req.flash("message", "Mot de passe incorrect !")
            return res.redirect('/auth/login')
        } else {
            req.session.userID = user[0].userID;
            req.session.user = {
                id: user[0].userID,
                firstname: user[0].firstname,
                lastname: user[0].lastname,
                email: user[0].email
            };
            res.redirect('/')
        }
}

//-------------------------------------------Page d'inscription----------------------------------------//
//GET
exports.getRegisterPage = (req,res) =>{

    return res.render('register', {message: req.flash("message")})
}


//POST 
exports.postRegisterPage = async (req,res) =>{

    const {firstname,lastname,email,password} = req.body

    //si l'email existe
    const findEmail = await querysql('SELECT count(*) AS cnt from user where email = ?', email)
    //console.log(findEmail[0].cnt)
    if (findEmail[0].cnt > 0){
        req.flash("message", "l'email est déja utilisé !")
        return res.redirect('/auth/register')
    }

    //Ajouter un utilisateur
    try{
        //hasher de le mot de passe
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)
        
        await querysql(
        'INSERT INTO user (firstname, lastname, email, password) VALUE(?, ?, ?, ? )',
        [firstname, lastname, email, hash],
        (err, result) =>{ 
            if(err){
                req.flash("message", `il y a une erreur ${err}`)
                return res.redirect('/auth/register')
            }
            req.flash("message", "Inscription réussie ! Vous pouvez dès à présent vous connecter !")
            return res.redirect('/auth/login') 
        }
        )

    } catch (err) {
        res.status(400).json({message: err})
    }
}

//-------------------------------------------Déconnection----------------------------------------//
//GET

exports.getLogoutPage = async (req,res) =>{
    req.session.destroy(function(err){
        res.redirect('/')
    })
}
//-------------------------------------------tableau de bord----------------------------------------//
const { query } = require("express")

//GET
exports.getDashboardPage = (req,res) =>{
    const user = req.session.user
    console.log(user);
    return res.render('dashboard', {user: user})
    
}


//POST 
exports.postMusicPage = async (req,res) =>{

    const {Music_author,Music__ft_author,Music_name,Music_date} = req.body

    //Ajouter un utilisateur
    try{

        await querysql(
        'INSERT INTO user (Music_author, Music__ft_author, Music_name, Music_date) VALUE(?, ?, ?, ? )',
        [Music_author, Music__ft_author, Music_name, Music_date],
        (err, result) =>{ 
            if(err){
                req.flash("message", `il y a une erreur ${err}`)
                return res.redirect('/dashboard')
            }
            req.flash("message", "Inscription réussie ! Vous pouvez dès à présent vous connecter !")
            return res.redirect('/dashboard') 
        }
        )

    } catch (err) {
        res.status(400).json({message: err})
    }
}
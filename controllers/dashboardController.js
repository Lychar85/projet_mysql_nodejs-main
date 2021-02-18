//-------------------------------------------tableau de bord----------------------------------------//
const { query } = require("express")

//GET
exports.getDashboardPage = async (req,res) =>{
    const user = req.session.user
    const musicAdmin = await querysql('SELECT Music.Music_author , Music.Music__ft_author , Music.Music_name , Music.Music_date , Music.MusicID FROM Music ')

     res.render('dashboard', {user: user, music: musicAdmin})
    
}
//POST 
exports.postMusicPage = async (req,res) =>{

    const {Music_author,Music__ft_author,Music_name,Music_date} = req.body

    //Ajouter un utilisateur
    try{

        await querysql(
        'INSERT INTO Music (Music_author, Music__ft_author, Music_name, Music_date) VALUE(?, ?, ?, ? )',
        [Music_author, Music__ft_author, Music_name, Music_date],
        (err, result) =>{ 
            if(err){
                console.log("erreur:", err);
                return res.redirect('/dashboard')
            }
            console.log(result);
            return res.redirect('/dashboard') 
        }
        )

    } catch (err) {
        res.status(400).json({message: err})
    }
}

//GET
exports.getEditMusicPage = async (req,res) =>{
    
    const musicSingle = await querysql("SELECT * FROM Music WHERE MusicID = '"+ req.params.id +"'; ")

     res.render('editerMusic', {musicSingle: musicSingle})
    
}


// Modifier une musique
exports.putEditMusicPage = async (req,res) => {
    const {Music_author,Music__ft_author,Music_name,Music_date,MusicID} = req.body
    
    // GESTION DES EXECPTIONS
    try {
        await querysql(
            "UPDATE article SET Music_author = '" + Music_author + "', Music__ft_author = '" + Music__ft_author + "', Music_name = '" + Music_name + "', Music_date = '" + Music_date + "', MusicID = '" + MusicID + "', WHERE MusicID = '" + req.params.id + "';",
                (err,result) => {
            if(err) {
                res.send(err)
            } else {
                return res.redirect('/dashboard/edit')
            }
        }
        )        
    } catch(err) {
        res.status(400).json({message: err})
    }
}
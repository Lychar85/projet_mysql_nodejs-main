
//-------------------------------------------Page de musique----------------------------------------//
//GET
exports.getMusicPage = async (req,res) =>{
    const user = req.session.user
    const music = await querysql('SELECT Music.Music_author , Music.Music__ft_author , Music.Music_name , Music.Music_date , Music.MusicID FROM Music ')

     res.render('music', {user: user, music: music})
    
}
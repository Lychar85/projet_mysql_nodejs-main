exports.getVerifyAuthpremium = (req,res,next) =>{
    if(req.session.user == undefined){
        req.flash('message', 'vous devez être connecter')
        return res.redirect('/auth/login')
    } else {
        next()
    }
}
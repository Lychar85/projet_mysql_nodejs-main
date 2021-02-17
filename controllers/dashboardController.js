exports.getDashboardPage = (req,res) =>{
    const user = req.session.user
    console.log(user);
    return res.render('dashboard', {user: user})
    
}
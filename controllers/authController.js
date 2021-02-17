exports.getLoginPage = (req,res) =>{

    return res.render('login')
}

exports.getRegisterPage = (req,res) =>{

    return res.render('register')
}

//POST 
exports.postRegisterPage = (req,res) =>{

    console.log(req.body)
}

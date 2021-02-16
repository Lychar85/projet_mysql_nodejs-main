const router = require('express').Router();
const authcontroller = require('../controllers/authController')

//-------------------------------------------Page de connexion----------------------------------------//

// GET
router.get("/login", authcontroller.getLoginPage)


//-------------------------------------------Page d'inscription----------------------------------------//
router
// GET
router.get("/register", authcontroller.getRegisterPage)

module.exports = router;
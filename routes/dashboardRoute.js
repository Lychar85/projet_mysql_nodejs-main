const router = require('express').Router()
const dashboardController = require('../controllers/dashboardController')
//-------------------------------------------Tableau de bord----------------------------------------//

// GET
router.get("/", dashboardController.getDashboardPage)

//Editer musique
//GET
router.get('/edit/:id', dashboardController.getEditMusicPage)
//PUT
router.put('/edit/:id', dashboardController.putEditMusicPage)



//POST
router.post('/music', dashboardController.postMusicPage)

module.exports = router;
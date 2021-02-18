const router = require('express').Router()
const dashboardController = require('../controllers/dashboardController')
//-------------------------------------------Tableau de bord----------------------------------------//

// GET
router.get("/", dashboardController.getDashboardPage)

//Editer musique
//GET
router.get('/music/edit/:id', dashboardController.getEditMusicPage)
//PUT
router.put('/music/edit/:id', dashboardController.putEditMusicPage)



//POST
router.post('/music', dashboardController.postMusicPage)

module.exports = router;
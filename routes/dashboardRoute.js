const router = require('express').Router()
const dashboardController = require('../controllers/dashboardController')
//-------------------------------------------Tableau de bord----------------------------------------//
// GET
router.get("/", dashboardController.getDashboardPage)

//Ajouter une musique
//POST
router.post('/music', dashboardController.postMusicPage)

//Editer musique
//GET
router.get('/music/edit/:id', dashboardController.getEditMusicPage)
//PUT
router.put('/music/edit/:id', dashboardController.putEditMusicPage)

//Supprimer une musique
router.delete('/music/suppr/:id', dashboardController.supprMusicPage)



module.exports = router;
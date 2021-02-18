const router = require('express').Router()
const dashboardController = require('../controllers/dashboardController')
//-------------------------------------------Tableau de bord----------------------------------------//

// GET
router.get("/", dashboardController.getDashboardPage)

//POST
router.post('/music', dashboardController.postMusicPage)

module.exports = router;
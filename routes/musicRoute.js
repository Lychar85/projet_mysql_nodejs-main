const router = require('express').Router()
const musicController = require('../controllers/musicController')


//-------------------------------------------Page de musique----------------------------------------//
//GET
router.get('/', musicController.getMusicPage )

module.exports = router;
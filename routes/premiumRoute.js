const router = require('express').Router();
const premiumController = require('../controllers/premiumController')

// GET - Index Page
router.get("/", premiumController.getpremiumPage)

module.exports = router;
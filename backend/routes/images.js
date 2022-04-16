const router = require('express').Router();
const { getImages } = require('../controllers/images');
const { validateGetImage } = require('../middlewares/validateQuery')

router.get('/images',validateGetImage, getImages);
router.get('/images/:safe')


module.exports = router;
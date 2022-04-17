const router = require('express').Router();
const { getImages, findImageById } = require('../controllers/images');
const { validateGetImage } = require('../middlewares/validateQuery')
const { validateId } = require('../middlewares/validateId')

router.get('/images',validateGetImage, getImages);
router.get('/images/:id', validateId, findImageById);



module.exports = router;
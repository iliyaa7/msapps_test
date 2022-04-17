
const pixbayService  = require('../service/pixabayService');
const NotFoundError = require('../errors/not-found-err');


module.exports.getImages = (req, res, next) => {
  pixbayService.query(req.query)
  .then((response) => {
    res.send(response)
  })
  .catch(next);
}

module.exports.findImageById = (req, res, next) => {
  pixbayService.findById(req.params.id)
  .then((response) => {
    res.send(response)
  })
  // I found it very difuiclt to diagnose the error returning from pixabay.
  // The pixabay api returned the same error response for different situations,
  // and I couldn't be sure that there was no image with that id or the id contained invalid charecters
  // (or any other reason)
  // so I chose to throw this error for the client's convenience.
  .catch(() => {
    throw new NotFoundError('no image with that id was found')
  })
  .catch(next);
}


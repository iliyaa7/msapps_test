const InvalidDataError = require('../errors/invalid-data-err')

//The pixabay documentation doesn't mention the format for the picture id.
//So I wrote this validation based on the received ids from pixabay.
// (just for the purpose of practicing validation in this assignment)


module.exports.validateId = (req, res, next ) => {
  const { id } = req.params;
  if(!/^\d+$/.test(id)) throw new InvalidDataError('the id must contain only digits');
  next();
}
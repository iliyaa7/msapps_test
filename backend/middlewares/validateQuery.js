const InvalidDataError = require('../errors/invalid-data-err')

//A custom validator for validating the query data.
//As mentioned in the pixabay documentation the category param can be empty and will
//be replaced with a default value, but for preventing unexpected behavior on the client's side
//I chose to block it with validation

module.exports.validateGetImage = (req, res, next ) => {
  const { category, pageNum, perPage } = req.query;
  if(!category) throw new InvalidDataError('category can not be empty');
  if(!pageNum || pageNum < 1) throw new InvalidDataError('invalid page number');
  if(!perPage || perPage < 3 || perPage > 200) throw new InvalidDataError('items per page should be between 3 and 200');
  next();
}


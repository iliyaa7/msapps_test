const InvalidDataError = require('../errors/invalid-data-err')

module.exports.validateGetImage = (req, res, next ) => {
  const { category, pageNum, perPage } = req.query;
  if(typeof category !== 'string' || !category) throw new InvalidDataError('category must be a string and can not be empty');
  if(pageNum < 1) throw new InvalidDataError('invalid page number');
  if(perPage <= 3 && perPage >= 200) throw new InvalidDataError('items per page should be between 3 and 200');
  next();
}


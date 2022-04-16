const axios = require('axios');
const ServerError = require('../errors/serverError')

module.exports.getImages = (req, res, next) => {

  const { APIKEY = '25540812-faf2b76d586c1787d2dd02736' } = process.env;
  const { category, pageNum, perPage } = req.query;

  axios.get(`https://pixabay.com/api/?key=${APIKEY}&q=${category}&page=${pageNum}&per_page=${perPage}`)
  .then(response => {
    let maxPages = 0;
    if(response.data?.totalHits) {
      maxPages = Math.round(response.data.totalHits / perPage);
    }
    const pixabayData = {
      data: response.data,
      maxPages
    }
    res.send(pixabayData)
  })
  .catch(err => {
    console.log(err)
  })
  .catch(next);
}
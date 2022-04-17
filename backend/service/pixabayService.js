const axios = require('axios')
const { APIKEY = '25540812-faf2b76d586c1787d2dd02736' } = process.env;
const baseUrl = 'https://pixabay.com/api';

//functions for fetching the needed data from the pixabay api

module.exports.query = (queryData) => {

  const { category, pageNum, perPage, order } = queryData;
  const options = {
    params: {
      key: APIKEY,
      q: category,
      page: pageNum,
      per_page: perPage
    }
  }
  if (order) {
    options.params.order = order;
  }

  return axios.get(baseUrl, options)
  .then(response => {
    let maxPages = 0;
    if(response.data?.totalHits) {
      maxPages = Math.round(response.data.totalHits / perPage);
    }
    const pixabayData = {
      data: response.data,
      maxPages
    }
    return pixabayData
  })
  .catch(err => err);
}

module.exports.findById = (id) => {
  const options = {
    params: {
      key: APIKEY,
      id: id
    }
  }
  return axios.get(baseUrl, options)
  .then(response => response.data)
  .catch(err => err);
}

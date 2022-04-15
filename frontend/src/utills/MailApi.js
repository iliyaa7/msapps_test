import fetchFunction from "./fetchFunction";


const apiKey = '25540812-faf2b76d586c1787d2dd02736';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  getCategory(category, pageNum) {
    return fetchFunction(`${this._baseUrl}/api/?key=${apiKey}&q=${category}&page=${pageNum}&per_page=9`, {
      method: "GET",
    });
  }


}
const pixApi = new Api({
  baseUrl: "https://pixabay.com"
});


export default pixApi





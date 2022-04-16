import fetchFunction from "./fetchFunction";


const apiKey = '25540812-faf2b76d586c1787d2dd02736';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  getCategory(category, pageNum, perPage) {
    return fetchFunction(`${this._baseUrl}/images?category=${category}&pageNum=${pageNum}&perPage=${perPage}`, {
      method: "GET",
    });
  }


}
const pixApi = new Api({
  baseUrl: "http://localhost:3000"
});


export default pixApi





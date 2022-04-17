import fetchFunction from "./fetchFunction";



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





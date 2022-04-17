import fetchFunction from "./fetchFunction";



class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  getCategory(category, pageNum, perPage, order) {
    const url = new URL(`${this._baseUrl}/images`)
    const params = {
      category,
      pageNum,
      perPage,
      order
    }
    url.search = new URLSearchParams(params).toString();

    return fetchFunction(url, {
      method: "GET",
    });
  }


}
const imagesApi = new Api({
  baseUrl: "http://localhost:3000"
});



export default imagesApi





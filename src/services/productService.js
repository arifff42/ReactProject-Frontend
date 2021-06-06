import axios from "axios";

export default class ProductService {
  getAllProducts() {
    return axios.get("http://localhost:8080/api/products/getall");
  }
}

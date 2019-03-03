import axios from "axios";

export const getAllProductsFromService = () => {
  return axios.get("http://localhost:8080/api/product/all");
};

export const addProductToServer = product => {
  return axios.post("http://localhost:8080/api/product/save", product);
};

export const deleteProductFromServer = id => {
  return axios.delete("http://localhost:8080/api/product/" + id);
};

import {
  getAllProductsFromService,
  addProductToServer,
  deleteProductFromServer
} from "../../services/ProductServices";

export const RESET_STATE = "RESET_STATE";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCESSFULL = "FETCH_PRODUCTS_SUCCESSFULL";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESSFULL = "DELETE_PRODUCT_SUCCESSFULL";

export const getAllProducts = () => {
  return dispatch => {
    dispatch({
      type: FETCH_PRODUCTS
    });

    getAllProductsFromService().then(res => {
      setTimeout(() => {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESSFULL,
          payload: res.data
        });
      }, 2000);
    });
  };
};

export const addProduct = product => {
  return dispatch => {
    dispatch({
      type: ADD_PRODUCT
    });

    addProductToServer(product).then(res => {
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: res.data
      });
    });
  };
};

export const deleteProduct = id => {
  return dispatch => {
    dispatch({
      type: DELETE_PRODUCT
    });
    setTimeout(() => {
      deleteProductFromServer(id).then(res => {
        dispatch({
          type: DELETE_PRODUCT_SUCCESSFULL,
          payload: id
        });
      });
    }, 2000);
  };
};

export const resetState = () => {
  return dispatch => {
    dispatch({
      type: RESET_STATE
    });
  };
};

/* export const addProduct = product => {
  return {
    type: "ADD_PRODUCT",
    product
  };
}; */

import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESSFULL,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_SUCCESSFULL,
  RESET_STATE
} from "../actions/productAction";
const initState = {
  products: [],
  loader: false,
  productAddedSuccess: false
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case RESET_STATE:
      console.log("reset");
      return {
        ...state,
        loader: false,
        productAddedSuccess: false
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loader: false,
        productAddedSuccess: false
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loader: false,
        productAddedSuccess: true
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        loader: true
      };
    case FETCH_PRODUCTS_SUCCESSFULL:
      return {
        ...state,
        products: action.payload,
        loader: false,
        productAddedSuccess: false
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loader: true
      };
    case DELETE_PRODUCT_SUCCESSFULL:
      return {
        ...state,
        loader: false,
        products: state.products.filter(p => p.productId !== action.payload)
      };
    default:
      return state;
  }
};

export default productReducer;

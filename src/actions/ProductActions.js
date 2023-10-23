import FakeApi from "../apis/FakeApi";
import { ActionTypes } from "../constants/ActionTypes";

export const fetchProducts =  () => async (dispatch)=>{
  
  const response = await FakeApi.get("/products")
  // console.log("proActions res", response);
  dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data.products})
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
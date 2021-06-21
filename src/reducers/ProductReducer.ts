import {
    Product_FAIL,
    Product_LOADING,
    Product_SUCCESS,
    ProductDispatchTypes,
    ProductStat
  } from "../actions/ProductType";
  
  interface DefaultStateI {
    loading: boolean,
    product?: ProductStat[]
    error?:string
  }
  
  const defaultState: DefaultStateI = {
    loading: false
  };
  
  const productReducer = (state: DefaultStateI = defaultState, action: ProductDispatchTypes) : DefaultStateI => {
    switch (action.type) {
      case Product_FAIL:
        return {
          loading: false,
          error: action.error
        }
      case Product_LOADING:
        return {
          loading: true,
        }
      case Product_SUCCESS:
        return {
          loading: false,
          product: action.payload
        }
      default:
        return state
    }
  };
  
  
  export default productReducer
import {get} from '../utils/service';
import {Dispatch} from "redux";
import {Product_FAIL, Product_LOADING, Product_SUCCESS, ProductDispatchTypes} from "./ProductType";


export const getProduct = () => async (dispatch: Dispatch<ProductDispatchTypes>) => {
  try {
    dispatch({
      type: Product_LOADING
    })
    let link = `/products`;

    const res: any = await get(link);
    // console.log(res);

    dispatch({
      type: Product_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: Product_FAIL,
      error:e
    })
  }
};
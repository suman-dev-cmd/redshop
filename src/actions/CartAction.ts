import {Dispatch} from "redux";
import {ADD_TO_CART, REMOVE_TO_CART, FAIL_TO_CART,ALL_REMOVE_TO_CART, CartDispathtype,CartItemType} from "./CartType";

export const addItemToCart=(item:CartItemType)=>async(dispatch: Dispatch<CartDispathtype>)=>{
    try{
        // console.log(item)
        dispatch({
            type:ADD_TO_CART,
            payload:item
        })
    }catch(e){
        dispatch({
            type:FAIL_TO_CART,
            error:e
        })
    }
}
export const removeItemQtyFromCart=(items:CartItemType)=>async(dispatch: Dispatch<CartDispathtype>)=>{
    // console.log(items);
    try{
        dispatch({
            type:REMOVE_TO_CART,
            payload:items
        })
    }catch(e){
        // console.log(e)
        dispatch({
            type:FAIL_TO_CART,
            error:e
        })
    }
}
export const removeItemFromCart=(itemss:CartItemType)=>async(dispatch: Dispatch<CartDispathtype>)=>{
    try{
        dispatch({
            type:ALL_REMOVE_TO_CART,
            payload:itemss
        })
    }catch(e){
        // console.log(e)
        dispatch({
            type:FAIL_TO_CART,
            error:e
        })
    }
}

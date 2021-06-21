import {combineReducers} from "redux";
import productReducer from "./ProductReducer";
import getCart from "./CartReducer"
const RootReducer = combineReducers({
  products: productReducer,
  carts:getCart
});

export default RootReducer;
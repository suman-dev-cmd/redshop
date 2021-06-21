import {ADD_TO_CART, REMOVE_TO_CART, FAIL_TO_CART,ALL_REMOVE_TO_CART, CartDispathtype,CartItemType} from "../actions/CartType";


interface InitialState{
    cartitem:CartItemType[],
    error?:string
}
const defaultState: InitialState = {
    cartitem: []
  };
const getCart=(state:InitialState=defaultState,action:CartDispathtype):InitialState=>{
    switch(action.type){
        case ADD_TO_CART:
            const item = action.payload;
            const isItemExist  = state.cartitem?.find(i=>i.id===item.id);
            if(isItemExist){
                return {
                    ...state,
                    cartitem:state.cartitem?.map(i=>
                    i.id === item.id?
                    {...i,amount:i.amount+1}
                    :
                    i    
                    )
                }
            }else{
                return {
                    ...state,
                    cartitem: [...state.cartitem,{...item,amount:1}] 
                }
            };
        case REMOVE_TO_CART:
            const items = action.payload;
            console.log(items);
            const isItemExists  = state.cartitem?.find(i=>i.id===items.id);
            if(isItemExists){
                return {
                    ...state,
                    cartitem:state.cartitem?.map(j=>
                    j.id === items.id && j.amount !==1 ?
                    {...j,amount:j.amount-1}
                    :
                    j    
                    )
                }
            }else{
                return {
                    ...state,
                    cartitem: [...state.cartitem,{...items,amount:1}] 
                }
            };
        case ALL_REMOVE_TO_CART:
            const itemss = action.payload;
            const isItemExistss  = state.cartitem?.filter(i=>i.id===itemss.id);
            return {
                ...state,
                cartitem: state.cartitem.filter(i => i.id !== itemss.id)
            }
            
        case FAIL_TO_CART:
            return{
                error:action.error,
                cartitem:[]
            }
        default:
            return state 
    }
}
export default getCart;
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const ALL_REMOVE_TO_CART = 'ALL_REMOVE_TO_CART';
export const FAIL_TO_CART = 'FAIL_TO_CART';

export type CartItemType = {
    id:number,
    category:string,
    description:string,
    image:string,
    price:number,
    title:string,
    amount:number
};

export interface AddToCart {
    type:typeof ADD_TO_CART,
    payload:CartItemType
};

export interface RemoveToCart{
    type:typeof REMOVE_TO_CART,
    payload:CartItemType
};
export interface AllRemoveToCart{
    type:typeof ALL_REMOVE_TO_CART,
    payload:CartItemType
};

export interface FailToCart{
    type:typeof FAIL_TO_CART,
    error:string
};

export type CartDispathtype = AddToCart|RemoveToCart|FailToCart|AllRemoveToCart;
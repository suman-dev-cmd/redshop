export const Product_LOADING = "Product_LOADING";
export const Product_FAIL = "Product_FAIL";
export const Product_SUCCESS = "Product_SUCCESS";



export type ProductStat = {
    id:number,
    category:string,
    description:string,
    image:string,
    price:number,
    title:string,
    amount:number
}

export interface ProductLoading {
  type: typeof Product_LOADING
}

export interface ProductFail {
  type: typeof Product_FAIL,
  error:string
}

export interface ProductSuccess {
  type: typeof Product_SUCCESS,
  payload: ProductStat[]
}

export type ProductDispatchTypes = ProductLoading | ProductFail | ProductSuccess
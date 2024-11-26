import { PRODUCTS } from "../actionTypes";

export const updateListProducts = (listProducts: any) => ({
  type: PRODUCTS.UPDATE_LIST,
  listProducts,
});

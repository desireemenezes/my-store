import { PRODUCTS } from "../actionTypes";

const initState = {
  listParams: {
    OrderBy_Desc: true,
  },
};

export const ProductsReducer = (
  state = initState,
  action: { type: any; listParams: any }
) => {
  switch (action.type) {
    case PRODUCTS.UPDATE_LIST:
      return { ...state, listParams: action.listParams };
  }
};

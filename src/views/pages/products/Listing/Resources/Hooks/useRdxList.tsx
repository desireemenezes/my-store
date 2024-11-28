import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { updateListProducts } from "../../../../../../redux/actions/productsActions";

export function useRdxList() {
    const dispatch = useDispatch();
    const rdxUpdateProductList = (params: any) => dispatch(updateListProducts(params));
    const rdxProductList = useSelector((state: RootStateOrAny) => state.products.listParams) || {};

    return {
        rdxUpdateProductList,
        rdxProductList
    }
}
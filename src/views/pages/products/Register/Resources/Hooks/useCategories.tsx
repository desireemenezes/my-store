
import { useQuery } from "react-query";
import { Api } from "../API";
import { IDataCategories } from "../Types";

export function useCategories() {

    const { data: dataCategories, isLoading: isLoadingCategory, isError: isErrorCateory } = useQuery<IDataCategories>(['get-categories'], () => Api.getCategories(), {
        staleTime: 1000 * 60 * 60
    });

    return {
        dataCategories,
        isLoadingCategory,
        isErrorCateory
    };
}
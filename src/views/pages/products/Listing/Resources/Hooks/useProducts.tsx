import { useQuery } from "react-query";
import { Api } from "../API";
import { IResponseProducts } from "../Types";
import { useState } from "react";

export function useProducts() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const { data, isLoading, isError } = useQuery<IResponseProducts>(['get-products'], () => Api.getProducts(), {
        staleTime: 1000 * 60 * 60
    });

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const texFormat = (price: string, fraction = 2) => {
        if (price) {
            const value = parseFloat(price).toFixed(fraction).replace('.', ',').replace(/\d(?=(\d{3})+,)/g, match => `${match}.`);
            return value;
        }
        return '00,00';
    }


    return {
        data,
        isLoading,
        isError,
        page,
        rowsPerPage,
        texFormat,
        handleChangePage,
        handleChangeRowsPerPage,
    };
}
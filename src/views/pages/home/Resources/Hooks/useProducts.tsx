import { useQuery } from "react-query";
import { Api } from "../API";
import { IResponseCategory, IResponseProduts, IvalueChart } from "../Types";
import { useEffect, useState } from "react";

export function useProducts() {
    const [total, setTotal] = useState(0);
    const [dataFilterCategories, setDataFilterCategories] = useState<IvalueChart[]>();
    const [filterPrice, setFilterPrice] = useState('')

    const { data, isLoading, isError } = useQuery<IResponseProduts>(['get-products'], () => Api.getProducts(), {
        staleTime: 1000 * 60 * 60
    });

    const { data: dataCategory, isLoading: loadingCategory, isError: errorCategory } = useQuery<IResponseCategory>(['get-categories'], () => Api.getProductsCategories(), {
        staleTime: 1000 * 60 * 60
    });

    useEffect(() => {
        if (data?.data) {
            const filter = data?.data.reduce((sum, price) => {
                return sum + price.price;
            }, 0)

            setFilterPrice(filter.toString());
            setTotal(data?.data.length);
        }

    }, [data?.data, filterPrice]);


    useEffect(() => {
        if (data?.data) {
            const category = data?.data.map((item) => item.category.name);
            const nameCategory = category.filter((item) => item);
            const occurrences = nameCategory?.reduce((acc: any, curr: any) => {
                return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
            }, {});

            const objectValues = Object.keys(occurrences)
                .map(((value: string, index: number) => ({
                    value,
                    index,
                })))

            const ObjectCategory = [objectValues?.map((itens) => itens)];
            setDataFilterCategories(ObjectCategory[0])
        }

    }, [data?.data]);

    const categoriesChart = [dataFilterCategories?.map((i) => [i.value, i.index])];
    const chartData = categoriesChart[0];
    chartData?.unshift(["Task", "Hours per Day"]);

    const analyticsCategories = {
        title: "Minhas categorias",
        pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
        is3D: true, // Enables 3D view
        // slices: {
        //   1: { offset: 0.2 }, // Explodes the second slice
        // },
        pieStartAngle: 100, // Rotates the chart
        sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
        legend: {
            position: "bottom",
            alignment: "center",
            textStyle: {
                color: "#263238",
                fontSize: 14,
            },
        },
        colors: ["#6B0AC9", "#AFEEEE", "#5271ff", "#4682B4"],
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
        dataCategory,
        loadingCategory,
        errorCategory,
        total,
        filterPrice,
        analyticsCategories,
        chartData,
        texFormat,

    };
}
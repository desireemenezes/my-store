import { useState } from "react";
import { useRdxList } from "../../Hooks/useRdxList";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

type Order = 'asc' | 'desc';

interface Data {
    title: string;
    category: string;
    price: number;
    image: string;
}

interface HeadCell {
    id: keyof Data;
    label: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'image',
        label: 'Img'
    },
    {
        id: 'title',
        label: 'Nome do Produto'
    },

    {
        id: 'category',
        label: 'Categoria'
    },

    {
        id: 'price',
        label: 'Preço'
    },
]

interface IHeadPorps {
    oneRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
}

function Head({ oneRequestSort, order, orderBy }: IHeadPorps) {
    const [orderby, setOrderby] = useState(false);
    // const { rdxUpdateProductList, rdxProductList } = useRdxList();

    const createSort = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        oneRequestSort(event, property);
        //rdxUpdateProductList({ ...rdxProductList, OrderBy_: property, OrderByDesc_: !orderby });
        setOrderby(!orderby);
    }

    const CustomSvg = {
        svg: {
            opacity: '1',
        },
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
    };

    const getStyles = (label: string) => ({
        ...CustomSvg,
        marginLeft: label === 'title' ? '80px' : '',
        with: label === 'title' ? '23px' : 'auto',
    });

    return (
        <TableHead style={{ backgroundColor: 'linear-gradient(to right bottom, #5271ff, #6B0AC9)' }}>
            <TableRow>
                <TableCell width={10 + "%"}></TableCell>
                <TableCell sortDirection={order} width={30 + "%"}>
                    <TableSortLabel
                        sx={CustomSvg}
                        onClick={createSort('title')}
                        active={orderBy === 'title'}
                        direction={orderBy === 'title' ? order : 'desc'}
                    >
                        Nome Produto
                    </TableSortLabel>
                </TableCell>

                <TableCell sortDirection={order} width={20 + "%"}>
                    <TableSortLabel
                        sx={CustomSvg}
                        onClick={createSort('category')}
                        active={orderBy === 'category'}
                        direction={orderBy === 'category' ? order : 'desc'}
                    >
                        Categoria
                    </TableSortLabel>
                </TableCell>

                <TableCell sortDirection={order} width={20 + "%"}>
                    <TableSortLabel
                        sx={CustomSvg}
                        onClick={createSort('price')}
                        active={orderBy === 'price'}
                        direction={orderBy === 'price' ? order : 'desc'}
                    >
                        Preço
                    </TableSortLabel>
                </TableCell>


                {/*
                {headCells?.map(
                    (head) =>
                        <TableCell key={head.id} sortDirection={orderBy === head.id ? order : false}>
                            <TableSortLabel
                                sx={getStyles(head.label)}
                                active={orderBy === head.id}
                                direction={orderBy === head.id ? order : 'asc'}
                                onclick={createSort(head.id)}
                            >
                                {head.label}
                            </TableSortLabel>
                        </TableCell>
                )}
                */}


            </TableRow>
        </TableHead >
    );
}

export default function HeadTable() {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState('');

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'asc' : 'desc');
        setOrderBy(property);
    }
    return <Head oneRequestSort={handleRequestSort} order={order} orderBy={orderBy} />
}
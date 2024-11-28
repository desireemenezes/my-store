import { useState } from "react";
import { useRdxList } from "../../Hooks/useRdxList";
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';

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
    numeric: boolean;
    disablePadding: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'image',
        label: 'Img',
        numeric: false,
        disablePadding: true,
    },
    {
        id: 'title',
        label: 'Nome do Produto',
        numeric: false,
        disablePadding: true,
    },

    {
        id: 'category',
        label: 'Categoria',
        numeric: false,
        disablePadding: true,
    },

    {
        id: 'price',
        label: 'Preço',
        numeric: false,
        disablePadding: true,
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
        marginLeft: label === 'title' ? '10px' : '',
        with: label === 'title' ? '10px' : 'auto',
    });

    return (
        <TableHead >
            <TableRow>
                {headCells.map((headCell) => (
                    headCell.id === 'image' ? (
                        <TableCell key={headCell.label} width={10 + "%"}></TableCell>
                    ) : (
                        <TableCell
                            key={headCell.label}
                            align={headCell.numeric ? 'right' : 'left'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                sx={getStyles(headCell.label)}
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSort(headCell.id)}
                            >
                                {headCell.label}

                            </TableSortLabel>
                        </TableCell>
                    )
                ))}

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
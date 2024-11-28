

import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, IconButton, } from "@mui/material";

type IPagination = {
    count: number;
    page: number;
    rowPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export default function Pagination({ count, page, rowPerPage, onPageChange }: IPagination) {
    const theme = useTheme();
    const handleBackButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    }

    const handleNextButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    }

    return (
        <Box sx={{ flexShink: 0, ml: 2.5 }}>
            <IconButton onClick={handleBackButton} disabled={page === 0} arial-label="página anterior">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>

            <IconButton onClick={handleNextButton} disabled={page >= Math.ceil(count / rowPerPage) - 1} arial-label="próxima anterior">
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
        </Box>

    )
}
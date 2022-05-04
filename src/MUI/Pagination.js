import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from "@mui/material/Stack";


export default function PaginationSize({pagesCount, currentPage, onPageChanged}) {
    return (
        <Stack spacing={2}>
            <Pagination
                count={pagesCount}
                size="small"
                page={currentPage}
                onChange={(_,num) => onPageChanged(num)}
            />
        </Stack>

    );
}

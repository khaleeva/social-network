import * as React from 'react';
import Pagination from '@mui/material/Pagination';


export default function PaginationSize({pagesCount}) {
    return (

            <Pagination
                count={pagesCount}
                size="small"
            />


    );
}

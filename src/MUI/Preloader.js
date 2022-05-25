import React from 'react';
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";

const Preloader = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'20px'}}>
            <CircularProgress />
        </Box>
    );
};

export default Preloader;
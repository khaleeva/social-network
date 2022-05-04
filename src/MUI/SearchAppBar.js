import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {hexToRgb} from "@mui/material";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: hexToRgb("#182039", 0.15),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '30rem',
    border: "1px solid #252e4b",
}));


const StyledSearchIcon = styled(SearchIcon)(({theme}) => ({
    color: '#50b5ff ', '&: hover': {
        color: "#449ad9", cursor: "pointer", transition: "color 0.2s ease-in"
    }
}))


const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit', '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch', '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    return (
        <Box>
            <Search>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                />
                <StyledSearchIcon onClick={()=>console.log('hello')}/>
            </Search>
        </Box>);
}

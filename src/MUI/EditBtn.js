import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {Edit, PhotoCamera} from "@mui/icons-material";



const Span = styled('span')({
    marginLeft: '0.5rem'
})



const EditBtn = (props) => {


    return (


        <IconButton
            aria-label="upload picture"
            component="span"
            onClick={props.activeEditMode}
        >
            <Edit/>
        </IconButton>


    );
}

export default EditBtn;
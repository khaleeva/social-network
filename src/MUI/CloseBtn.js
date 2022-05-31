import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {Close} from "@mui/icons-material";





const EditBtn = (props) => {

    return (
        <IconButton
            aria-label="upload picture"
            component="span"
            onClick={props.onClick}
        >
            <Close/>
        </IconButton>


    );
}

export default EditBtn;
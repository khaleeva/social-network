import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {Edit} from "@mui/icons-material";





const EditBtn = (props) => {

    return (
        <IconButton
            aria-label="upload picture"
            component="span"
            onClick={props.onClick}
        >
            <Edit/>
        </IconButton>


    );
}

export default EditBtn;
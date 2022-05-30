import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {Settings} from "@mui/icons-material";




const SettingsBtn = (props) => {


    return (


        <IconButton
            aria-label="upload picture"
            component="span"
            sx={{backgroundColor: 'rgba(255,255,255, 0.5)'}}
            onClick={props.handleOpen}

        >
            <Settings/>
        </IconButton>


    );
}

export default SettingsBtn;
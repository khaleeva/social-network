import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import {PhotoCamera} from "@mui/icons-material";



const Input = styled('input')({
    display: 'none',
});


export default function UploadBtn(props) {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="icon-button-file">
                <Input  accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                    {/*<Avatar src={props.src} sx={props.sx}/>*/}
                    <PhotoCamera />
                </IconButton>
            </label>
        </Stack>
    );
}
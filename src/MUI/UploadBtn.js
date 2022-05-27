import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import {PhotoCamera} from "@mui/icons-material";

const Input = styled('input')({
    display: 'none',
});

export default function UploadBtn(props) {


    const onPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="icon-button-file">
                <Input  accept="image/*" id="icon-button-file" type="file" onChange={onPhotoSelected}/>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </Stack>
    );
}
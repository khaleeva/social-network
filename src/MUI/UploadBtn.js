import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {PhotoCamera} from "@mui/icons-material";


const Input = styled('input')({
    display: 'none',
});

const Span = styled('span')({
    marginLeft: '0.5rem'
})


export const addNecessaryComponent = (Component) => {
    return (props) => {
        return
    };
}

const UploadBtn = (props) => {


    const onPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }



    return (

        <>
            <label htmlFor="icon-button-file" >
                <Input  accept="image/*" id="icon-button-file" type="file" onChange={onPhotoSelected}/>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />

                </IconButton>
                <Span sx={{fontSize: '1rem', mr: 1, cursor:'pointnpm er'}}>{props.text}</Span>
            </label>

        </>


    );
}

export default UploadBtn;
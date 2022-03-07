import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



export default function ImageAvatars(src) {
    return (
        <Stack direction="row" spacing={1}>
            <Avatar alt="Remy Sharp" src={src}/>
        </Stack>
    );
}
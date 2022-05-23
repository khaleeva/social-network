import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function StatusForm(props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-basic"
                // label="Change your status"
                variant="standard"
                type={props.type}
                autoFocus={props.autoFocus}
                onBlur={props.onBlur}
                onChange={props.onChange}
                value={ props.value }

            />
        </Box>
    );
}

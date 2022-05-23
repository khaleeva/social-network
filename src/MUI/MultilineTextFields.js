import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MyCustomButton from "./MyCustomButton";


export default function MultilineTextFields(props) {


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={props.onSubmit}
        >
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label={props.label}
                    multiline
                    rows={4}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                    error={props.error}
                />

                <MyCustomButton className={props.className} type="submit" disabled={props.disabled}>
                   Add Post
                </MyCustomButton>

            </div>


        </Box>
    );
}

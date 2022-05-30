import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SettingsBtn from "./SettingsBtn";
import MyCustomButton from "./MyCustomButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#182039',
    color:'#8c91b6',
    // border: '2px solid #50b5ff',
    borderRadius:'5px',
    // boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <SettingsBtn handleOpen={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Setting
                    </Typography>
                    <MyCustomButton
                        className={"sendButton"}
                        children={'Close'}
                        onClick = {handleClose}/>
                </Box>
            </Modal>
        </div>
    );
}

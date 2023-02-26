import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 2,
    
};

export default function Modal3() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='info__nav__itens'>
            <Button onClick={handleOpen} id="btn--share" ><i class="bi bi-arrows-angle-expand"></i></Button>
            <a download id="btn--share" href={require("../images/super-mario-bros.jpg")}><i class="bi bi-download"></i></a>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="pop_up po_2">
                            <img src={require("../images/super-mario-bros.jpg")}  alt="logo" className='fz'/>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}


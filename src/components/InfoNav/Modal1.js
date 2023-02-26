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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Modal1() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} id="btn--share" >Share&nbsp;<i class="bi bi-share"></i></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h1 id="btn--share-fs">Share</h1>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="pop_up">
                            <i class="popup__item bi bi-facebook"></i>
                            <i class="popup__item bi bi-twitter"></i>
                            <i class="popup__item bi bi-instagram"></i>
                            <i class="popup__item bi bi-chat-left-text-fill"></i>
                            <i class="popup__item bi bi-pinterest"></i>
                            <i class="popup__item bi bi-telegram"></i>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}


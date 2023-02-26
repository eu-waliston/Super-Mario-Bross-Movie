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
            <Button onClick={handleOpen} className="show__save_menu" id="btn--calendar">save to calendar</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className="top__info">
                            <h3>Get Tickets</h3>
                            <p>Friday, 07 Apr 2023</p>
                            <p className="web">www.thesupermariobros.movie</p>
                        </div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <hr />
                        <div className='itens__sd'>
                            <p>
                                Choose a calendar
                            </p>
                            <h3><i class="itens_ask bi bi-google"></i> Google Calendar</h3>
                            <h3><i class="itens_ask bi bi-calendar-date"></i> Apple iCal</h3>
                            <h3><i class="itens_ask bi bi-windows"></i> Microsoft Outlook</h3>
                            <h3><i class="itens_ask bi bi-calendar4-event"></i> Yahoo</h3>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}


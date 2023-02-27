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
    width: 1000,
    height: 655,
    bgcolor: '#2FAEE5',
    border: 'none',
    boxShadow: 24,
    p: 1,
};

export default function VideoModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} className="btn">Watch Trailer</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="video__container">
                            <iframe key="KydqdKKyGEk" class="elementForYTiframe" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="The Super Mario Bros. Movie | Official Teaser Trailer" src="https://www.youtube-nocookie.com/embed/KydqdKKyGEk?rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.thesupermariobros.movie&amp;widgetid=15" id="widget16" width="100%" height="100%" frameborder="0"></iframe>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}


import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Divider } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  px: 5,
  height: 500,
  overflow: 'auto',
  textAlign: 'justify',
};



export default function ProjectModal({ isModalOpen, handleClose }) {
 
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h3"
              component="h2"
              style={{ textAlign: 'center' }}
            >
              Instructions
            </Typography>
            <Divider variant="middle" />

            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

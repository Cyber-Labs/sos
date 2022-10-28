import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Divider,Stack,Chip } from '@mui/material';


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



export default function ProjectModal({ isModalOpen, handleClose,details }) {
 
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
          <Box sx={style} style={{width:900,maxHeight:400,overflow:'auto'}}>
            <Typography
              id="transition-modal-title"
              variant="h3"
              component="h2"
            >
              {details.title}
            </Typography>
            <Divider variant="middle" />
            <div style={{marginTop:10}}>
            <Chip label={details.organization} color="success" />
            </div>
            
            <div style={{marginTop:10}}>
            {details.description}
            </div>
          <div style={{marginTop:10}}>
          <Stack direction='row' sx={{ flexWrap: 'wrap', gap:1 }}>
              {details.techstacks.map((name) => 
              <Chip label={name} color='primary'/>
              )}
            </Stack>
          </div>

          <div style={{marginTop:10}}>
             <b><a href={details.github} target='__blank' sytle={{textDecoration:'none'}}>Github</a></b>
          </div>
          <div style={{marginTop:10}}>
             <b><a href={details.slack} target='__blank' sytle={{textDecoration:'none'}}>Slack Channel</a></b>
          </div>
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

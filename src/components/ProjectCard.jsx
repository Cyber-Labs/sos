import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions,Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

export default function ProjectCard({ details }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
   
    <Card sx={{ maxWidth: 400 , display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
     
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {details.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <Stack direction='row' sx={{ flexWrap: 'wrap', gap:1 }}>
              {details.techstacks.map((name) => 
              <Chip label={name} color='primary'/>
             
              )}
            </Stack>
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={()=>handleModalOpen(true)}>Know More</Button>
      </CardActions>
    </Card>
    <ProjectModal isModalOpen={isModalOpen} handleClose={handleModalClose}/>
    </>
  );
}

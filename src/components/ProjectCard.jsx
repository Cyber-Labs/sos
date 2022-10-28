import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions,Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
function shortenText(text)
{
    let length = text.length;
    let finalText = "";
    let minLength = length;
    if(minLength > 100) minLength = 100;
    for(let i=0;i<minLength;i++)
    {
        finalText += text[i];
    }
    if(length > 100)
    return finalText + "...";

    return finalText;
}
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
   
    <Card sx={{ width: 350 , display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
     
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {details.title}
          </Typography>
          <Typography variant='body2' color='text.secondary' style={{wordWrap:'break-word'}}>
            {shortenText(details.description)}
          </Typography>
        </CardContent>
        <CardActions>
        <Button  onClick={()=>handleModalOpen(true)}>Know More</Button>
      </CardActions>
    </Card>
    <ProjectModal isModalOpen={isModalOpen} handleClose={handleModalClose} details={details}/>
    </>
  );
}

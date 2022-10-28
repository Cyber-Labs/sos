import { Grid, Container} from '@mui/material'
import React from 'react'
import Heading from '../components/Heading'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
const Projects = () => {
  return (
    <>
     <Heading text="Projects"/>
     <Container maxWidth="lg">

   
    
     <Grid container spacing={2}>
        {projects.map((project) => <Grid key={project.id} item xs={4} sx={{display:'flex'}}>
                <ProjectCard details={project}/>
        </Grid>)}

     </Grid>
     </Container>
    </>
   

  )
}

export default Projects
import { Grid} from '@mui/material'
import React from 'react'
import Heading from '../components/Heading'
import ProjectCard from '../components/ProjectCard'

const makeData = (title,description,techstacks,github,slack) =>{
    return {
        title,
        description,
        techstacks,
        github,
        slack
    }
}
const projects = [
    makeData(
    'xxx',
    'bla bla bla',
    ['node js','react','mongodb','express','node js','react','mongodb','express'],
    'https://www.github.com',
    'https://www.slack.com'),
    makeData(
        'xxx',
        'bla bla bla',
        ['node js','react','mongodb','express'],
        'https://www.github.com',
        'https://www.slack.com'),
]
const Projects = () => {
  return (
    <>
     <Heading text="Projects"/>
     <Grid container spacing={2} alignItems="stretch">
        {projects.map((project) => <Grid item xs={4} sx={{display:'flex'}}>
                <ProjectCard details={project}/>
        </Grid>)}

     </Grid>
    </>
   

  )
}

export default Projects
import { Grid, Container } from "@mui/material";
import React from "react";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectData";
const Projects = () => {
  return (
    <>
      <Heading text="Projects" />
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5}}>
        <Grid container>
          {projects.map((project) => (
            <ProjectCard details={project} key={project.id}/>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;

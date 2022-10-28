import { Grid, Container } from "@mui/material";
import React from "react";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
const Projects = () => {
  return (
    <>
      <Heading text="Projects" />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container>
          {projects.map((project) => (
            <ProjectCard details={project} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;

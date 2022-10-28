import React from "react";
import Heading from "./Heading";
import { Container, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import organizations from "../data/organizations";
import projects from "../data/projects";
const Organization = () => {
  const { orgId } = useParams();

  const [organization, setOrganization] = useState(null);
  useEffect(() => {
    organizations.forEach((organ) => {
      if (organ.id == orgId) {
        setOrganization(organ);
      }
    });
  }, []);
  return (
    <>
    {organization && <>
        <Heading text={organization.title} />
      <Container maxWidth='lg'>
      <div style={{marginTop:10}}>
            {organization.description}
            </div>
        <Grid container spacing={2}>
          {projects
            .filter((project) => project.orgId === organization.id)
            .map((project) =>
              <Grid key={project.id} item xs={4} sx={{ display: "flex" }}>
                <ProjectCard details={project} />
              </Grid>)}
        </Grid>
      </Container>
    </>}
     
    </>
  );
};

export default Organization;

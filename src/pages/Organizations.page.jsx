import React from "react";
import Heading from "../components/Heading";
import organizations from "../data/orgData";
import OrganizationCard from "../components/OrganizationCard";
import { Container, Grid } from "@mui/material";
const Organizations = () => {
  return (
    <>
      <Heading text="Organizations" />
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{mt: 5, mb: 5}}>
          {organizations.map((organization) => (
            <OrganizationCard details={organization} key={organization.id}/>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Organizations;

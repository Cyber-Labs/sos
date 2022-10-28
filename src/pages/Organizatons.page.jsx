import React from "react";
import Heading from "../components/Heading";
import organizations from "../data/organizations";
import OrganizationCard from "../components/OrganizationCard";
import { Container, Grid } from "@mui/material";
const Organizations = () => {
  return (
    <>
      <Heading text="Organizations" />
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{mt: 3}}>
          {organizations.map((organization) => (
            <OrganizationCard details={organization} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Organizations;

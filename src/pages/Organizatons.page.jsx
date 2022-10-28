import React from "react";
import Heading from "../components/Heading";
import organizations from "../data/organizations";
import OrganizationCard from "../components/OrganizationCard";
import {Container, Grid} from '@mui/material'
const Organizations = () => {
  return (
    <>
      <Heading text='Organizations' />
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          {organizations.map((organization) => (
            <Grid key={organization.id} item xs={4} sx={{ display: "flex" }}>
              <OrganizationCard details={organization} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Organizations;

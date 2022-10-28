import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions, Button } from "@mui/material";

import { useNavigate } from "react-router";

export default function OrganzationCard({ details }) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{
          width: { lg: "30%", sm: "45%", xs: "90%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "10px",
          boxShadow: "rgb(136 136 136) 0px 2px 8px",
          m: 2,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="trimText">
            {details.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => navigate(`/organizations/${details.id}`)}>
            Know More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

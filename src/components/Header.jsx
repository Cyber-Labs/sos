import React from "react";
// import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
// import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import backgroundImage from "../assets/header.jpg";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "35rem",
  // maxHeight: "24rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  width: "100%",
  backgroundSize: "cover",
  position: "relative",
  isolation: "isolate",
  // margin: '0rem 2rem',
  "&::after": {
    content: '""',
    position: "absolute",
    background: "black",
    zIndex: "-1",
    inset: "0",
    opacity: "0.6",
  },
}));

const CountDown = () => {
  const match = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  // const loggedIn = useSelector((store) => store.user.loggedIn);
  return (
    <StyledBox>
      <Typography
        variant="h6"
        sx={{
          fontSize: match ? "4rem" : "2rem",
          color: "#fff",
          fontWeight: "700",
          marginY: "1.5rem",
          "font-family": "monospace !important",
          px: 2
        }}
      >
        Welcome To The Season Of Open Source
      </Typography>

      <Box
        sx={{
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8D9EF4",
              marginRight: "0.5rem",
              fontSize: "1rem",
              padding: "0.7rem 1.5rem",
              "&:hover": {
                backgroundColor: "#FE7163",
              },
            }}
            onClick={() => navigate("projects")}
          >
            Projects
          </Button>
          <Button
            sx={{
              backgroundColor: "#8D9EF4",
              fontSize: "1rem",
              padding: "0.7rem 1.5rem",
              "&:hover": {
                backgroundColor: "#FE7163",
              },
            }}
            variant="contained"
            onClick={() => navigate("organizations")}
          >
            Organizations
          </Button>
        </>
      </Box>
    </StyledBox>
  );
};

export default CountDown;

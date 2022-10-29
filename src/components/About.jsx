import { useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Heading from "./Heading";
import AboutImg from "../assets/aboutimg.jpg";

const About = () => {
  const aboutImg = useRef(null);
  const match = useMediaQuery("(min-width:600px)");
  // const appearOptions = {
  //   thresold: 1,
  //   rootMargin: "0px 0px -250px 0px",
  // };
  // useEffect(() => {
  //   const appearOnScroll = new IntersectionObserver(function (
  //     entries,
  //     appearOnScroll
  //   ) {
  //     entries.forEach((entry) => {
  //       if (!entry.isIntersecting) {
  //         return;
  //       } else {
  //         entry.target.classList.add("appeared");
  //         appearOnScroll.unobserve(entry.target);
  //       }
  //     });
  //   },
  //   appearOptions);
  //   appearOnScroll.observe(aboutImg.current);
  // }, [aboutImg]);
  return (
    <Box
      sx={{
        // backgroundColor: "#ECEDE9",
        width: "100%",
      }}
    >
      <Box sx={{ padding: 4 }}>
        <Heading text="ABOUT" size={match}></Heading>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 5,
            mx: 2,
            fontSize: "1.2em",
            lineHeight: "1.75em",
            letterSpacing: "1.25px",
            "@media (max-width: 1000px)": {
              fontSize: "1em",
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              width: "50%",
              pl: 10,
              // transform: 'translateX(-50px)',
              "@media (max-width: 1000px)": {
                width: "100%",
                px: 2,
              },
            }}
          >
Season of Open Source is a one-month-long online program for students who are new to open-source software development. The program not only helps students to get involved in open source but also prepares them for many open source summer programs, Google Summer of Code being one of them.
          SOS provides a great opportunity to get acquainted with Github along with Git commands and contribute to open source efficiently. Brush up your coding skills.
          If you love coding and want to learn about software development then SOS helps you to get a glimpse of it and gives you a head start.
          </Box>
          <Box
            sx={{
              width: "50%",
              "@media (max-width: 1000px)": {
                width: "100%",
              },
            }}
          >
            <img
              ref={aboutImg}
              src={AboutImg}
              alt="About section"
              style={{
                width: "100%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

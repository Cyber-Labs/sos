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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            deleniti ratione, rerum animi ab beatae aut incidunt tempore
            eligendi temporibus repudiandae eveniet perferendis distinctio!
            Consequatur, qui quae dolorem libero quis quo reiciendis vero
            laudantium alias quia nesciunt dignissimos ab, consequuntur laborum
            earum natus architecto expedita praesentium. Culpa excepturi hic
            dicta, at ut eligendi alias iste minima voluptas ab quidem deserunt
            sed possimus, unde quam. Officiis mollitia quidem dolores
            praesentium. Voluptate necessitatibus, nihil sapiente perspiciatis
            expedita inventore illum aliquid porro dicta doloribus laboriosam
            quis, qui nobis molestiae magnam harum esse repellendus modi,
            accusantium debitis! Dolorem aliquam quod, quisquam facilis possimus
            quis.
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

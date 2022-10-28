import React from 'react';
// import Heading from '../components/Heading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyTimeLine from '../components/Timeline';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <MyTimeLine />
      <Footer />
    </>
  );
};

export default Home;

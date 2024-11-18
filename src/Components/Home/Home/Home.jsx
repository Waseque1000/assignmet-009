import React from "react";
import Navbar from "../../Navbar/Navbar";
import Allwords from "../../Allwords/Allwords";
import Hero from "../../Hero/Hero/Hero";
import Hero2 from "../../Hero/Hero2/Hero2";
import About from "../../About/About";
import Hero3 from "../../Hero/Hero3/Hero3";
import { Helmet } from "react-helmet";
import AboutShared from "../../Shared/AboutShared";
import Feedback from "../../About/Feedback/Feedback";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lingo Bingo</title>
      </Helmet>
      <Hero></Hero>
      <Hero2></Hero2>
      <Hero3 />
      <AboutShared></AboutShared>
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;

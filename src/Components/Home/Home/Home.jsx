import React from "react";
import Navbar from "../../Navbar/Navbar";
import Allwords from "../../Allwords/Allwords";
import Hero from "../../Hero/Hero/Hero";
import Hero2 from "../../Hero/Hero2/Hero2";
import About from "../../About/About";
import Hero3 from "../../Hero/Hero3/Hero3";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Hero2></Hero2>
      <Hero3 />
      <About></About>
    </div>
  );
};

export default Home;

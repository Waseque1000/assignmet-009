import React from "react";
import Navbar from "../../Navbar/Navbar";
import Allwords from "../../Allwords/Allwords";
import Hero from "../../Hero/Hero/Hero";
import Hero2 from "../../Hero/Hero2/Hero2";
import About from "../../About/About";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Hero2></Hero2>
      {/* <About></About> */}
      <Allwords></Allwords>
    </div>
  );
};

export default Home;

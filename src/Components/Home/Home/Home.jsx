import Hero from "../../Hero/Hero/Hero";
import Hero2 from "../../Hero/Hero2/Hero2";

import Hero3 from "../../Hero/Hero3/Hero3";
import { Helmet } from "react-helmet";
import Feedback from "../../About/Feedback/Feedback";
import Footer from "../../Footer/Footer";
import Success from "../../Success/Success";
import Webabout from "../../Website/WebAbout/Webabout";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lingo Bingo</title>
      </Helmet>
      <Hero></Hero>
      <Hero2></Hero2>
      <Success />
      <Hero3 />
      <Webabout />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;

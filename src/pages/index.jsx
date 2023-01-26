import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Info from "../components/Info/Info";
import { homeObjOne } from "../components/Info/Data";
import Habilities from "../components/Habilities/Habilities";
import ProjectsSection from "../components/Projects";
import FooterSection from "../components/Footer/Footer";

const Home = () => {

  return (
    <>
      <Navbar  />
      <Banner />
      <Info {...homeObjOne} />
      <Habilities />
      <ProjectsSection />
      <FooterSection />
      
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Info from "../components/Info/Info";
import { homeObjOne } from "../components/Info/Data";
import Habilities from "../components/Habilities/Habilities";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Projects";
import { GlobalStyle } from "../globalStyles";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Info {...homeObjOne} />
      <Habilities />
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import AboutProduct from "./AboutProduct";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <AboutProduct></AboutProduct>
      <HomeProduct></HomeProduct>
    </div>
  );
};

export default Home;

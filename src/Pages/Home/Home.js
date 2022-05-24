import React from "react";
import AboutProduct from "./AboutProduct";
import AddBanner from "./AddBanner";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <AboutProduct></AboutProduct>
      <HomeProduct></HomeProduct>
      <AddBanner></AddBanner>
    </div>
  );
};

export default Home;

import React from "react";
import AboutProduct from "./AboutProduct";
import AddBanner from "./AddBanner";
import BussinessCard from "./BussinessCard";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <AboutProduct></AboutProduct>
      <HomeProduct></HomeProduct>
      <AddBanner></AddBanner>
      <BussinessCard></BussinessCard>
    </div>
  );
};

export default Home;

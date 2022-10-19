import React from "react";
import AboutProduct from "./AboutProduct";
import AddBanner from "./AddBanner";
import BrandLogos from "./BrandLogos";
import BussinessCard from "./BussinessCard";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";
import NewsLatter from "./NewsLatter";
import ReviewArea from "./ReviewArea";
import ReviewCarousal from "./ReviewCarousal";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <AboutProduct></AboutProduct>
      <HomeProduct></HomeProduct>
      <AddBanner></AddBanner>
      <BussinessCard></BussinessCard>
      <ReviewCarousal></ReviewCarousal>
      <ReviewArea></ReviewArea>
      <BrandLogos></BrandLogos>
      <NewsLatter></NewsLatter>
    </div>
  );
};

export default Home;

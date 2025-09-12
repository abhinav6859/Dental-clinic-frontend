import React from "react";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import BookAppiontment from "./BookAppiontment";
import Doctors from "./Doctors";
import Blogs from "./Blogs";
import Services from "./Services";
import ReviewCart from "./ReviewMain";
import PartwoodGreenDental from "./PartwoodGreenDental";

const Home = () => {
  return (
    <>
      <Banner />
      <PartwoodGreenDental />
      <Services />
      <AboutSection />
      <Doctors />
      <BookAppiontment />
      <Blogs />
      <ReviewCart />
    </>
  );
};

export default Home;

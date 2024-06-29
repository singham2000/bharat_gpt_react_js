import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Service from "../Components/Service";
import Brand from "../Components/Brand";
import Testimonial from "../Components/Testimonial";
import TextArea from "../Components/TextArea";
import SupportArea from "../Components/SupportArea";
import Awardsandrecognition from "../Components/Awards_and_recognition";
import VideoGallery from "../Components/VideoGallery";
import Developer from "../Components/Developer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Service />
        <Brand />
        <Testimonial />
        <TextArea />
        <SupportArea />
        <Awardsandrecognition />
        <VideoGallery />
        <Developer />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

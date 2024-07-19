import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { useContext } from "react";
import contentContext from "../utils/contentContext";
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
  const location = useLocation();
  const [fetchedData, setFetchedData] = useState([]);
  const { getContent } = useContext(contentContext);
  useEffect(() => {
    getContent().then((data) => {
      console.log(data);
      setFetchedData(data.result);
    });
    const elementId = location.hash.slice(1);
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);
  return (
    <div>


      <Navbar />
      <main>
        <Hero data={fetchedData}/>
        <About data={fetchedData} />
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

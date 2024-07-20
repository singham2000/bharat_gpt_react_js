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
import ModalService from "../Components/ModalService";

const Home = () => {
  const location = useLocation();
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (id) => {
    setShowModal(true);
    setSelectedId(id);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <main>
        <Hero data={fetchedData} />
        <About data={fetchedData} />
        <Service data={fetchedData} />
        <Brand data={fetchedData} />
        <Testimonial data={fetchedData} />
        <TextArea data={fetchedData} />
        <SupportArea data={fetchedData} />
        <Awardsandrecognition data={fetchedData} />
        <VideoGallery data={fetchedData} />
        <Developer
          data={fetchedData}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        <ModalService
          data={fetchedData}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          showModal={showModal}
          selectedId={selectedId}
        />
      </main>
      <Footer data={fetchedData} />
    </div>
  );
};

export default Home;

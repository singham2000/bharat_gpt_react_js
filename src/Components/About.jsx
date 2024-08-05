import React, { useState, useEffect, useRef } from "react";
import Poster from "../Assets/images/poster.jpg";
import Video from "../Assets/video/corover_video.mp4";
import LogoImg1 from "../Assets/images/img-1.png";
import LogoImg2 from "../Assets/images/img-2.png";
import LogoImg3 from "../Assets/images/img-3.png";
import { register } from "swiper/element/bundle";
import "../Assets/css/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

import EditPencil from "../Components/EditPencil";

const About = ({ data }) => {
  const refB = useRef(null);
  const [isLoop, setIsLoop] = useState(false);
  const setting = {
    slidesPerView: 3,
    spaceBetween: 82,
    navigation: {
      nextEl: ".about-button-next-1",
      prevEl: ".about-button-prev-1",
    },
    breakpoints: {
      1860: {},
      1800: {
        spaceBetween: 40,
      },
      1701: {},
      1600: {},
      1560: {},
      1400: {
        spaceBetween: 60,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 60,
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };
  useEffect(() => {
    setIsLoop(true);
    // handleGetData();
  }, []);

  register();
  return (
    <section
      ref={refB}
      id="about-area"
      className="tp-about-area box-plr p-relative"
      style={{ height: "max-content" }}
    >
      <div className="tp-about-shape d-none d-xl-block">
        <img className="shape-1" src="assets/img/about/shape-1.png" alt="" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-12">
            <video
              id="corover_video"
              className="w-100 rounded-1"
              loop
              controls
              poster={Poster}
            >
              <source src={Video} type="video/mp4" />
              <EditPencil
                id={1}
                existing={data[1]?.display_content}
                content_type={"txt"}
              >
                {data[1]?.display_content}
                {/* Your browser does not support the video tag. */}
              </EditPencil>
            </video>
            <center className="d-flex flex-column">
              <label
                htmlFor="corover_video"
                style={{ fontSize: "18px", textAlign: "center" }}
              >
                <EditPencil
                  id={2}
                  existing={" Make Your GenAI Bot"}
                  content_type={"txt"}
                >
                  {/* Make Your GenAI Bot */}
                  {data[2]?.display_content}
                </EditPencil>
              </label>
              <h3 className="tp-feature-title">
                <EditPencil
                  id={3}
                  existing={data[3]?.display_content}
                  content_type={"txt"}
                >
                  {data[3]?.display_content}
                  {/* We aspire you becoming GEN AI developer.... in fraction of
                  time. */}
                </EditPencil>
              </h3>
              <center>
                <svg
                  width="194"
                  height="5"
                  viewBox="0 0 194 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M193.649 4.22307C129.517 2.55338 65.7543 2.288 1.66891 4.99709C-0.571625 5.09661 -0.540924 2.60867 1.66891 2.48703C65.34 -0.962917 130.116 -1.06243 193.649 3.70336C194.109 3.73653 194.125 4.23412 193.649 4.22307Z"
                    fill="rgb(128,128,128)"
                  />
                </svg>
              </center>
            </center>
          </div>
          <div className="col-xl-7 col-lg-10">
            <div className="tp-about-wrapper pl-50">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="tp-about-title-wrapper p-relative"
                    style={{ marginBottom: "50px" }}
                  >
                    <span className="tp-section-title__pre">
                      <EditPencil
                        id={4}
                        existing={data[4]?.display_content}
                        content_type={"txt"}
                      >
                        {data[4]?.display_content}
                        {/* AI AUTOMATED WORKFORCES: */}
                      </EditPencil>
                      <span className="title-pre-color">
                        <EditPencil
                          id={5}
                          existing={data[5]?.display_content}
                          content_type={"txt"}
                        >
                          {data[5]?.display_content}
                          {/* THE FUTURE OF ENTERPRISE */}
                        </EditPencil>
                      </span>
                    </span>
                    <h3
                      className="tp-section-title"
                      style={{ marginBottom: "0px", important: "true" }}
                    >
                      <EditPencil
                        id={122}
                        // existing={"Choose multiple LLMs to create a world class Virtual Assistant"}
                        content_type={"txt"}
                      >
                        {data[122]?.display_content}
                        {/* THE FUTURE OF ENTERPRISE */}
                      </EditPencil>


                      <span className="title-left-shape">
                        <svg
                          width="194"
                          height="5"
                          viewBox="0 0 194 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M193.649 4.22307C129.517 2.55338 65.7543 2.288 1.66891 4.99709C-0.571625 5.09661 -0.540924 2.60867 1.66891 2.48703C65.34 -0.962917 130.116 -1.06243 193.649 3.70336C194.109 3.73653 194.125 4.23412 193.649 4.22307Z"
                            fill="rgb(128,128,128)"
                          />
                        </svg>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="tp-about-item-wrapper">
                <Swiper
                  {...setting}
                  loop={isLoop}
                  className="about-active swiper-container"
                >
                  <SwiperSlide style={{ height: "max-content" }}>
                    <div className="tp-about-item-thumb">
                      <img
                        src={LogoImg1}
                        alt="theme-pure"
                        priority
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="tp-about-item-content">
                      <h4
                        className="about-title"
                        style={{ fontSize: "18px", important: "true" }}
                      >
                        <EditPencil
                          id={6}
                          existing={data[6]?.display_content}
                          content_type={"txt"}
                        >
                          {data[6]?.display_content}
                          {/* Build your Organization’s GenAI powered bots using the
                          sensational and proven platform from CoRover. */}
                        </EditPencil>
                      </h4>
                      <p style={{ lineHeight: "24px", important: "true" }}>
                        <EditPencil
                          id={7}
                          existing={data[7]?.display_content}
                          content_type={"txt"}
                        >
                          {data[7]?.display_content}
                          {/* Build next-generation AI applications trained on a
                          dataset of over 2 trillion tokens. */}
                        </EditPencil>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "max-content" }}>
                    <div className="tp-about-item mb-30">
                      <div className="tp-about-item-thumb">
                        <img src={LogoImg2} alt="" />
                      </div>
                      <div className="tp-about-item-content">
                        <h4
                          className="about-title"
                          style={{ fontSize: "18px", important: "true" }}
                        >
                          <EditPencil
                            id={8}
                            existing={data[8]?.display_content}
                            content_type={"txt"}
                          >
                            {data[8]?.display_content}
                            {/* BharatGPT.ai is your transformation partner with
                            deep built-in knowledge in its Foundational Model. */}
                          </EditPencil>
                        </h4>
                        <p style={{ lineHeight: "24px", important: "true" }}>
                          <EditPencil
                            id={11}
                            existing={data[11]?.display_content}
                            content_type={"txt"}
                          >
                            {data[11]?.display_content}
                            {/* This platform is the core to GenAI based Chatbots
                            (codeless solutions), using BharatGPT.ai. */}
                          </EditPencil>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "max-content" }}>
                    <div className="tp-about-item mb-30">
                      <div className="tp-about-item-thumb">
                        <img src={LogoImg3} alt="" />
                      </div>
                      <div className="tp-about-item-content">
                        <h5
                          className="about-title"
                          style={{ fontSize: "18px", important: "true" }}
                        >
                          <EditPencil
                            id={9}
                            existing={data[9]?.display_content}
                            content_type={"txt"}
                          >
                            {data[9]?.display_content}
                            {/* We enable enterprises and other communities to
                            develop their function-specific Chatbots. */}
                          </EditPencil>
                        </h5>
                        <p style={{ lineHeight: "24px", important: "true" }}>
                          <EditPencil
                            id={10}
                            existing={data[10]?.display_content}
                            content_type={"txt"}
                          >
                            {data[10]?.display_content}
                            {/* We invite business and development community to sign
                            up and witness the magic of building their
                            function-specific chatbots. */}
                          </EditPencil>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

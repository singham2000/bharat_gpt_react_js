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
        class="tp-about-area box-plr p-relative"
        style={{ height: "max-content" }}
      >
        <div class="tp-about-shape d-none d-xl-block">
          <img class="shape-1" src="assets/img/about/shape-1.png" alt="" />
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-5 col-lg-12">
              <video
                id="corover_video"
                className="w-100 rounded-1"
                loop
                controls
                poster={Poster}
              >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <center class="d-flex flex-column">
                <label
                  htmlFor="corover_video"
                  style={{ fontSize: "18px", textAlign: "center" }}
                >
                  Make Your GenAI Bot
                </label>
                <h3 class="tp-feature-title">
                  We aspire you becoming GEN AI developer.... in fraction of
                  time.
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
            <div class="col-xl-7 col-lg-10">
              <div class="tp-about-wrapper pl-50">
                <div class="row">
                  <div class="col-lg-12">
                    <div
                      class="tp-about-title-wrapper p-relative"
                      style={{ marginBottom: "50px" }}
                    >
                      <span class="tp-section-title__pre">
                        AI AUTOMATED WORKFORCES:
                        <span class="title-pre-color">
                          THE FUTURE OF ENTERPRISE
                        </span>
                      </span>
                      <h3
                        class="tp-section-title"
                        style={{ marginBottom: "0px", important: "true" }}
                      >
                        Choose multiple LLMs to create a world class
                        Virtual Assistant
                        <span class="title-left-shape">
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
                <div class="tp-about-item-wrapper">
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
                      <div class="tp-about-item-content">
                        <h4
                          class="about-title"
                          style={{ fontSize: "18px", important: "true" }}
                        >
                          Build your Organization’s GenAI powered bots using the
                          sensational and proven platform from CoRover.
                        </h4>
                        <p style={{ lineHeight: "24px", important: "true" }}>
                          Build next-generation AI applications trained on a
                          dataset of over 2 trillion tokens.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: "max-content" }}>
                      <div class="tp-about-item mb-30">
                        <div class="tp-about-item-thumb">
                          <img src={LogoImg2} alt="" />
                        </div>
                        <div class="tp-about-item-content">
                          <h4
                            class="about-title"
                            style={{ fontSize: "18px", important: "true" }}
                          >
                            BharatGPT.ai is your transformation partner with
                            deep built-in knowledge in its Foundational Model.
                          </h4>
                          <p style={{ lineHeight: "24px", important: "true" }}>
                            This platform is the core to GenAI based Chatbots
                            (codeless solutions), using BharatGPT.ai.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: "max-content" }}>
                      <div class="tp-about-item mb-30">
                        <div class="tp-about-item-thumb">
                          <img src={LogoImg3} alt="" />
                        </div>
                        <div class="tp-about-item-content">
                          <h5
                            class="about-title"
                            style={{ fontSize: "18px", important: "true" }}
                          >
                            We enable enterprises and other communities to
                            develop their function-specific Chatbots.
                          </h5>
                          <p style={{ lineHeight: "24px", important: "true" }}>
                            We invite business and development community to sign
                            up and witness the magic of building their
                            function-specific chatbots.
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

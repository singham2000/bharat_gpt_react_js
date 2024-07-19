import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EditPencil from "../Components/EditPencil";

const VideoGallery = () => {
  const setting = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".team-button-prev-1",
      prevEl: ".team-button-next-1",
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  const handleClick = () => {
    setTimeout(() => {
      const allPanes = document.getElementsByClassName("tab-pane");
      for (let i = 0; i < allPanes.length; i++) {
        const pane = allPanes[i];
        if (!pane.classList.contains("show")) {
          pane.classList.add("show");
        }
        if (!pane.classList.contains("fade")) {
          pane.classList.add("fade");
        }
        if (!pane.classList.contains("active")) {
          pane.classList.add("active");
        }
      }
    }, 500);
  };

  return (
    <section
      id="video-gallery"
      className="tp-industry-area p-relative pt-50 pb-10"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-industry-title-wrapper text-center">
              <h3 className="tp-section-title">
                Video Gallery
                <span className="title-center-shape">
                  <svg
                    width="194"
                    style={{ verticalAlign: "inherit" }}
                    height="5"
                    viewBox="0 0 194 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M193.649 4.22307C129.517 2.55338 65.7543 2.288 1.66891 4.99709C-0.571625 5.09661 -0.540924 2.60867 1.66891 2.48703C65.34 -0.962917 130.116 -1.06243 193.649 3.70336C194.109 3.73653 194.125 4.23412 193.649 4.22307Z"
                      fill="rgb(128,128,128)"
                    ></path>
                  </svg>
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-industry-wrapper mb-30 fadeRight">
              <div className="tp-industry-tab">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item"
                    onClick={handleClick}
                    role="presentation"
                    id="allVideoBtn"
                  >
                    <button
                      className="nav-link active"
                      id="pills-all-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-all"
                      type="button"
                      role="tab"
                      aria-controls="pills-all"
                      aria-selected="true"
                    >
                      All Videos
                    </button>
                  </li>
                  <li className="nav-item x" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Testimonials
                    </button>
                  </li>
                  <li className="nav-item x" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="true"
                    >
                      Products and Demos
                    </button>
                  </li>
                  <li className="nav-item x" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="true"
                    >
                      Awards & Recognition
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="tp-industry-tab-content">
                      <div className="tp-team-nav d-flex justify-content-end justify-content-lg-between align-items-end mb-30">
                        <h3 className="d-none d-lg-block">Testimonials</h3>
                        <div>
                          <button
                            type="button"
                            className="team-button-prev-1 tp-btn-hover-clear alt-color "
                            id="swiper-button-prev"
                            tabindex="0"
                            aria-label="Previous slide"
                          >
                            <i className="fa-regular fa-arrow-left"></i>
                            <b></b>
                          </button>
                          <button
                            type="button"
                            className="team-button-next-1 tp-btn-hover-clear alt-color "
                            id="swiper-button-next"
                            tabindex="0"
                            aria-label="Next slide"
                          >
                            <i className="fa-regular fa-arrow-right"></i>
                            <b></b>
                          </button>
                        </div>
                      </div>
                      <div className="tp-industry-tab-content-inner d-flex mb-30">
                        <div className="team-active swiper-container" id="hx">
                          <Swiper {...setting}>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="PnZ-nMS-USQ"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/PnZ-nMS-USQ/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      Dr. Pushpendra Singh, IIIT Delhi,
                                      Transformative Impact of BharatGPT,
                                      Enterprise Adoption.
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="wSfNfFzQFDY"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/wSfNfFzQFDY/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      Dr. Vikram Goyal, IIIT Delhi, Experiences
                                      in the world of Artificial Intelligence
                                      (BharatGPT).
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="yUiwy7viOHQ"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/yUiwy7viOHQ/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{ textAlign: "left" }}
                                    >
                                      Satya Nadella, Narendra Modi, and many
                                      renowned personalities are talking about
                                      CoRover
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="j0i99Vo5vf4"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/j0i99Vo5vf4/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      AskSarkar.Com - Pakki Jankari by Prime
                                      Minister, Mr. Narendra Modi (Powered by
                                      CoRover.ai)
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="gsEK7X1bEyI"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/gsEK7X1bEyI/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      IT Minister Ashwini Vaishnaw talks about
                                      the IRCTC ChatBot, AskDISHA, powered by
                                      CoRover.ai
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="yUiwy7viOHQ"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/yUiwy7viOHQ/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{ textAlign: "left" }}
                                    >
                                      Satya Nadella, Narendra Modi, and many
                                      renowned personalities are talking about
                                      CoRover
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="tp-industry-tab-content">
                      <div className="tp-team-nav d-flex justify-content-end justify-content-lg-between align-items-end mb-30">
                        <h3 className="d-none d-lg-block">
                          Products and Demos
                        </h3>
                        <div>
                          <button
                            type="button"
                            className="team-button-prev-1 tp-btn-hover-clear alt-color"
                            id="swiper-button-prev1"
                            tabindex="0"
                            aria-label="Previous slide"
                          >
                            <i className="fa-regular fa-arrow-left"></i>
                            <b></b>
                          </button>
                          <button
                            type="button"
                            className="team-button-next-1 tp-btn-hover-clear alt-color"
                            id="swiper-button-next1"
                            tabindex="0"
                            aria-label="Next slide"
                          >
                            <i className="fa-regular fa-arrow-right"></i>
                            <b></b>
                          </button>
                        </div>
                      </div>
                      <div className="tp-industry-tab-content-inner d-flex mb-30">
                        <div className="team-active swiper-container" id="hx1">
                          <Swiper {...setting}>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="QVhHvPYQlTY"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/QVhHvPYQlTY/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      Yukimi Virtual Assistant is an AI VideoBot
                                      (Interactive Digital Twin) in Japan,
                                      powered by CoRover.
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="Sm1ehLvan_0"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/Sm1ehLvan_0/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      Create Google Gemini Virtual Assistant
                                      (ChatBot, VoiceBot) using CoRover.ai’s
                                      No-Code Platform
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="sKGTn_T1ba8"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/sKGTn_T1ba8/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{ textAlign: "left" }}
                                    >
                                      CoroAssist: CoRover.ai’s Gen AI Co-Pilot
                                      for Enterprises Powered by BharatGPT
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="oUyaemUKbO8"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/oUyaemUKbO8/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      Real Time Speech Translation |
                                      Simultaneously one to many | CoRover |
                                      Bhashini | Google
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="oLM5IACnNFY"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/oLM5IACnNFY/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      eSevak | Grievance | AI Virtual Assistant
                                      | WhatsApp Bot | Dashboard | Samba J&K |
                                      CoRover BharatGPT
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="Ck0XwuBxBf4"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/Ck0XwuBxBf4/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{ textAlign: "left" }}
                                    >
                                      Conversational Analytics Dashboard - talk
                                      to your dashboards powered by CoRover.
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="tp-industry-tab-content">
                      <div className="tp-team-nav d-flex justify-content-end justify-content-lg-between align-items-end mb-10">
                        <h3 className="d-none d-lg-block">
                          {" "}
                          Awards & Recognition
                        </h3>
                        <div>
                          <button
                            type="button"
                            className="team-button-prev-1 tp-btn-hover-clear alt-color"
                            id="swiper-button-prev2"
                            tabindex="0"
                            aria-label="Previous slide"
                          >
                            <i className="fa-regular fa-arrow-left"></i>
                            <b></b>
                          </button>
                          <button
                            type="button"
                            className="team-button-next-1 tp-btn-hover-clear alt-color"
                            id="swiper-button-next2"
                            tabindex="0"
                            aria-label="Next slide"
                          >
                            <i className="fa-regular fa-arrow-right"></i>
                            <b></b>
                          </button>
                        </div>
                      </div>
                      <div className="tp-industry-tab-content-inner d-flex mb-30">
                        <div className="team-active swiper-container" id="hx2">
                          <Swiper {...setting}>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="bxlwyLaEXMM"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/bxlwyLaEXMM/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      AI Virtual Assistant AskDISHA of IRCTC,
                                      powered by CoRover | Best Digital
                                      Innovation Award.
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="n2y8BgUqkvk"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/n2y8BgUqkvk/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      Winner of the National Startup Awards
                                      2022.
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="zKlhAjbEnMM"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/zKlhAjbEnMM/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{ textAlign: "left" }}
                                    >
                                      The Government of India has honored
                                      CoRover with a special award - Azadi Ka
                                      Digital Mahotsav.
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="yRqAtQkt1Is"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/yRqAtQkt1Is/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      CoRover (Conversational AI Platform) wins
                                      Asia Leadership Award
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="0TF5CrtvAiA"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/0TF5CrtvAiA/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{
                                        height: "fit-content",
                                        textAlign: "left",
                                      }}
                                    >
                                      India to launch its own Generative AI
                                      BharatGPT with CoRover.ai and supported by
                                      iHub Anubhuti.
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tp-team-wrapper p-relative">
                                <div className="swiper-slide-x1">
                                  <center>
                                    <div
                                      className="video-container"
                                      data-video-id="yUiwy7viOHQ"
                                    >
                                      <img
                                        src="https://img.youtube.com/vi/yUiwy7viOHQ/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                      />
                                      <div className="play-button"></div>
                                    </div>
                                    <span
                                      className="video_label m-10"
                                      style={{ textAlign: "left" }}
                                    >
                                      Satya Nadella, Narendra Modi, and many
                                      renowned personalities are talking about
                                      CoRover
                                    </span>
                                  </center>
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;

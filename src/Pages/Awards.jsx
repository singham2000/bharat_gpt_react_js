import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import contentContext from "../utils/contentContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerS from "../Assets/images/awardBanner.jpeg";
import EditPencil from "../Components/EditPencil";
import axiosInstance from "../utils/axios";

const Awards = () => {
  const location = useLocation();
  const { getContent } = useContext(contentContext);
  const [fetchedData, setFetchedData] = useState([]);
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
  return (
    <div>
      <Navbar />

      <section
        className="breadcrumb__area breadcrumb-style pt-100 pb-100 mb-60 p-relative z-index-1"
        style={{ backgroundSize: "100%", backgroundImage: `url(${BannerS})` }}
        data-background="assets/img/banners.png"
      >
        <div className="breadcrumb__bg-overlay m-img"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="breadcrumb__content text-center">
                <h3
                  className="tp-section-title"
                  style={{ color: "black", fontSize: "45px" }}
                >
                  <EditPencil
                    id={93}
                    existing={fetchedData[93]?.display_content}
                    content_type={"txt"}
                  >
                    {fetchedData[93]?.display_content}
                  </EditPencil>
                  {/* Awards & Recognition */}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-team-breadcrumb-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={113}
                    existing={fetchedData[113]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[113]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={95}
                          existing={fetchedData[95]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[95]?.display_content}
                          {/* Global Fintech Competition */}
                        </EditPencil>
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={96}
                        existing={fetchedData[96]?.display_content}
                        content_type={"txt"}
                      >
                        {fetchedData[96]?.display_content}
                      </EditPencil>
                      {/* Winner of Global Fintech Award 2021 by GEP - DIT,
                      Government of UK */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={114}
                    existing={fetchedData[114]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[114]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={97}
                          existing={fetchedData[97]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[97]?.display_content}
                        </EditPencil>
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={98}
                        existing={fetchedData[98]?.display_content}
                        content_type={"txt"}
                      >
                        {fetchedData[98]?.display_content}
                      </EditPencil>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={115}
                    existing={fetchedData[115]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[115]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={99}
                          existing={fetchedData[99]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[99]?.display_content}
                        </EditPencil>
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={100}
                        existing={fetchedData[100]?.display_content}
                        content_type={"txt"}
                      >
                        {fetchedData[100]?.display_content}
                      </EditPencil>
                      {/* Best Company for Data Scientists, Data Analysts and
                      Engineers */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={116}
                    existing={fetchedData[116]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[116]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={101}
                          existing={fetchedData[101]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[101]?.display_content}
                        </EditPencil>
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={102}
                        existing={
                          " Ask ANVESHA, an HR AI Virtual Assistant of a Defense(Navy) PSU, GRSE, powered by CoRover.ai, is recognized as one of the top 75 AI-Enabled defense products in India."
                        }
                        content_type={"txt"}
                      >
                        {fetchedData[102]?.display_content}
                      </EditPencil>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={117}
                    existing={fetchedData[117]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[117]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={103}
                          existing={"Asia Leadership Award"}
                          content_type={"txt"}
                        >
                          {fetchedData[103]?.display_content}
                        </EditPencil>
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={104}
                        existing={fetchedData[104]?.display_content}
                        content_type={"txt"}
                      >
                        {fetchedData[104]?.display_content}
                      </EditPencil>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={118}
                    existing={fetchedData[118]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[118]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={105}
                          existing={"Digital Dragon Awards"}
                          content_type={"txt"}
                        >
                          {fetchedData[105]?.display_content}
                        </EditPencil>
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={106}
                        existing={fetchedData[106]?.display_content}
                        content_type={"txt"}
                      >
                        {fetchedData[106]?.display_content}
                      </EditPencil>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={119}
                    existing={fetchedData[119]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[119]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={107}
                          existing={"Certificate of Compliance"}
                          content_type={"txt"}
                        >
                          {fetchedData[107]?.display_content}
                        </EditPencil>
                        {/* Certificate of Compliance */}
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={108}
                        existing={"CMMI Level 5 Appraised"}
                        content_type={"txt"}
                      >
                        {fetchedData[108]?.display_content}
                      </EditPencil>
                      {/* CMMI Level 5 Appraised */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={120}
                    existing={fetchedData[120]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[120]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <spana style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={109}
                          existing={"CMMI Level 5 Appraised"}
                          content_type={"txt"}
                        >
                          {fetchedData[109]?.display_content}
                        </EditPencil>
                        CMMI Level 5 Appraised
                      </spana>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={110}
                        existing={"CMMI Level 5 Appraised"}
                        content_type={"txt"}
                      >
                        {fetchedData[110]?.display_content}
                      </EditPencil>
                      {/* CMMI Maturity Level 5 Certificate */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border py-3 px-4">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb">
                  <EditPencil
                    id={121}
                    existing={fetchedData[121]?.display_content}
                    content_type={"img"}
                  >
                    <img
                      height="250px"
                      src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[121]?.display_content}`}
                      alt=""
                    />
                  </EditPencil>
                  {/* <img
                    height="250px"
                    src="assets/img/awards/award_9.PNG"
                    alt=""
                  /> */}
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <spana style={{ textDecoration: "none", color: "black" }}>
                        <EditPencil
                          id={111}
                          existing={"Startup Karnataka Showcase"}
                          content_type={"txt"}
                        >
                          {fetchedData[111]?.display_content}
                        </EditPencil>
                        {/* Startup Karnataka Showcase */}
                      </spana>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      <EditPencil
                        id={112}
                        existing={
                          "CoRover’s AskDoc.ai is a winner in Combat Covid-19                      Challenge launched by Karnataka Innovation & Technology                      Society"
                        }
                        content_type={"txt"}
                      >
                        {fetchedData[112]?.display_content}
                      </EditPencil>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tp-cta-team-area p-relative">
        <div className="tp-cta-4-shape fadeUp">
          <img src="assets/img/cta/home-3/shape-2.png" alt="" />
        </div>
      </div>

      <Footer data={fetchedData} />
    </div>
  );
};

export default Awards;

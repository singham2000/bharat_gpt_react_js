import React from "react";
import { Link } from "react-router-dom";
const Awards_and_recognition = () => {
  return (
    <div>
      <section
        className="breadcrumb__area breadcrumb-style pt-20 pb-20 p-relative z-index-1"
        data-background=""
      >
        <div className="breadcrumb__bg-overlay m-img"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">
                  <h3 className="tp-section-title">Awards and Recognitions</h3>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-team-breadcrumb-area pt-10 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb ">
                  <img
                    height="250px"
                    src="assets/img/awards/award_1.PNG"
                    alt=""
                  />
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        Global Fintech Competition
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      Winner of Global Fintech Award 2021 by GEP - DIT,
                      Government of UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb ">
                  <img
                    height="250px"
                    src="assets/img/awards/award_2.PNG"
                    alt=""
                  />
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        Certificate of Recognition
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      Certified by Department of Industrial Promotion and Policy
                      , Startup India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="tp-team-wrapper p-relative mb-30">
                <div className="tp-team-wrapper-thumb ">
                  <img
                    height="250px"
                    src="assets/img/awards/award_3.PNG"
                    alt=""
                  />
                </div>
                <div className="tp-team-wrapper-content d-flex justify-content-between">
                  <div className="tp-team-wrapper-content-text">
                    <h3 className="team-title">
                      <span style={{ textDecoration: "none", color: "black" }}>
                        Best firm for Data Scientists
                      </span>
                    </h3>
                    <p style={{ fontSize: "16px", color: "#9f9b94" }}>
                      Best Company for Data Scientists, Data Analysts and
                      Engineers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-20 col-sm-6 d-flex justify-content-center align-items-center">
            <div className="tp-portfolio-details-right">
              <div
                className="tp-portfolio-details-btn"
                style={{ background: "transparent" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    background: "black",
                    borderRadius: "50px",
                  }}
                  to={"/awards"}
                >
                  Show More
                </Link>
                {/* <a href="awards.html"  ></a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards_and_recognition;

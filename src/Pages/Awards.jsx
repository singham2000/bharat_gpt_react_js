import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BannerS from '../Assets/images/banners.png'
const Awards = () => {
    return (
        <div>
            <Navbar />

            <section
                className="breadcrumb__area breadcrumb-style pt-100 pb-100 mb-60 p-relative z-index-1"
                style={{ backgroundSize: '100%', backgroundImage: `url(${BannerS})` }}
                data-background="assets/img/banners.png"
            >
                <div className="breadcrumb__bg-overlay m-img"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="breadcrumb__content text-center">
                                <h3
                                    className="tp-section-title"
                                    style={{ color: 'white', fontSize: '60px' }}
                                >
                                    Awards & Recognitions
                                    <span className="title-center-shape">
                                        <svg
                                            width="194"
                                            height="5"
                                            viewBox="0 0 194 5"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M193.649 4.22307C129.517 2.55338 65.7543 2.288 1.66891 4.99709C-0.571625 5.09661 -0.540924 2.60867 1.66891 2.48703C65.34 -0.962917 130.116 -1.06243 193.649 3.70336C194.109 3.73653 194.125 4.23412 193.649 4.22307Z"
                                                fill="rgb(0,186,0)"
                                            ></path>
                                        </svg>
                                    </span>
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
                                    <img
                                        height="250px"
                                        src="assets/img/awards/award_1.PNG"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <span
                                                style={{ textDecoration: 'none', color: 'black' }}
                                            >Global Fintech Competition</span>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>
                                            Winner of Global Fintech Award 2021 by GEP - DIT,
                                            Government of UK
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 border py-3 px-4">
                            <div className="tp-team-wrapper p-relative mb-30">
                                <div className="tp-team-wrapper-thumb">
                                    <img
                                        height="250px"
                                        src="assets/img/awards/award_2.PNG"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <span
                                                style={{ textDecoration: 'none', color: 'black' }}
                                            >Certificate of Recognition</span>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>
                                            Certified by Department of Industrial Promotion and Policy
                                            , Startup India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 border py-3 px-4">
                            <div className="tp-team-wrapper p-relative mb-30">
                                <div className="tp-team-wrapper-thumb">
                                   <img
                                            height="250px"
                                          src='assets/img/awards/award_3.PNG'
                                            alt=""
                                        />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <span
                                                style={{ textDecoration: 'none', color: 'black' }}
                                              
                                            >Best firm for Data Scientists</span>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>
                                            Best Company for Data Scientists, Data Analysts and
                                            Engineers
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 border py-3 px-4">
                            <div className="tp-team-wrapper p-relative mb-30">
                                <div className="tp-team-wrapper-thumb">
                                  <img
                                            height="250px"
                                            src="assets/img/awards/award_4.PNG"
                                            alt=""
                                        />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <span
                                                style={{ textDecoration: 'none', color: 'black' }}
                                               
                                            >
                                                HR AI Virtual Assistant
                                            </span>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>
                                            Ask ANVESHA, an HR AI Virtual Assistant of a Defence
                                            (Navy) PSU, GRSE, powered by CoRover.ai, is recognised as
                                            one of the top 75 AI-Enabled defence products in India.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 border py-3 px-4">
                            <div className="tp-team-wrapper p-relative mb-30">
                                <div className="tp-team-wrapper-thumb">
                                    <img
                                            height="250px"
                                            src="assets/img/awards/award_5.PNG"
                                            alt=""
                                        />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <span
                                                style={{ textDecoration: 'none', color: 'black' }}
                                            >
                                                Asia Leadership Award
                                            </span>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 border py-3 px-4">
                            <div className="tp-team-wrapper p-relative mb-30">
                                <div className="tp-team-wrapper-thumb">
                                    <img
                                            height="250px"
                                            src="assets/img/awards/award_6.PNG"
                                            alt=""
                                        />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <span
                                                style={{ textDecoration: 'none', color: 'black' }}
                                            >Digital Dragon Awards
                                            </span>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 border py-3 px-4">
                            <div className="tp-team-wrapper p-relative mb-30">
                                <div className="tp-team-wrapper-thumb">
                                    <img
                                            height="250px"
                                            src="assets/img/awards/award_7.PNG"
                                            alt=""
                                        />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <span
                                                style={{ textDecoration: 'none', color: 'black' }}
                                               
                                            >Certificate of Compliance
                                            </span>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>
                                            CMMI Level 5 Appraised
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 border py-3 px-4">
                            <div className="tp-team-wrapper p-relative mb-30">
                                <div className="tp-team-wrapper-thumb">
                                   <img
                                            height="250px"
                                            src="assets/img/awards/award_8.PNG"
                                            alt=""
                                        />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <spana
                                                style={{ textDecoration: 'none', color: 'black' }}
                                            >
                                                CMMI Level 5 Appraised
                                            </spana>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>
                                            CMMI Maturity Level 5 Certificate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 border py-3 px-4">
                            <div className="tp-team-wrapper p-relative mb-30">
                                <div className="tp-team-wrapper-thumb">
                                    <img
                                            height="250px"
                                            src="assets/img/awards/award_9.PNG"
                                            alt=""
                                        />
                                </div>
                                <div
                                    className="tp-team-wrapper-content d-flex justify-content-between"
                                >
                                    <div className="tp-team-wrapper-content-text">
                                        <h3 className="team-title">
                                            <spana
                                                style={{ textDecoration: 'none', color: 'black' }}
                                            >
                                                Startup Karnataka Showcase
                                            </spana>
                                        </h3>
                                        <p style={{ fontSize: '16px', color: '#9f9b94' }}>
                                            CoRover’s AskDoc.ai is a winner in Combat Covid-19
                                            Challenge launched by Karnataka Innovation & Technology
                                            Society
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

            <Footer />
        </div>
    )
}

export default Awards

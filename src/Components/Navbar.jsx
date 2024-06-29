import React, { useState } from 'react'
import BharatAi from '../Assets/images/bharatai.jpg';
import BharatAiLogo from "../Assets/images/bharatai.jpg";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Navbar = () => {
    const [show, setShow] = useState(false);
    const scrollToDiv = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="back-to-top-wrapper">
                <button id="back_to_top" type="button" className="back-to-top-btn">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6L6 1L1 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <header className="tp-header-area tp-header-height p-relative" style={{ background: 'white' }}>
                <div id="header-sticky" className="tp-header-bottom header__sticky p-relative">
                    <div className="tp-header-bottom-space p-relative">
                        <div className="container-fluid gx-0">
                            <div className="row gx-0 align-items-center justify-content-between">
                                <div className="col-xxl-3 col-xl-4" style={{ paddingLeft: '0', paddingRight: '0', important: 'true' }}>
                                    <div className="tp-header-main-left d-flex align-items-center p-relative">
                                        <div className="tp-header-hamburger-btn offcanvas-open-btn"
                                            data-background="assets/img/icon/header-hamburger-shape.png">
                                            <button className="hamburger-btn" onClick={handleShow}>
                                                <span>
                                                    <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M0 1.13163C0 0.506972 0.499692 0 1.11538 0H20.4487C21.0644 0 21.5641 0.506972 21.5641 1.13163C21.5641 1.7563 21.0644 2.26327 20.4487 2.26327H1.11538C0.499692 2.26327 0 1.7563 0 1.13163ZM27.8846 10.5619H1.11538C0.499692 10.5619 0 11.0689 0 11.6935C0 12.3182 0.499692 12.8252 1.11538 12.8252H27.8846C28.5003 12.8252 29 12.3182 29 11.6935C29 11.0689 28.5003 10.5619 27.8846 10.5619ZM14.5 21.1238H1.11538C0.499692 21.1238 0 21.6308 0 22.2555C0 22.8801 0.499692 23.3871 1.11538 23.3871H14.5C15.1157 23.3871 15.6154 22.8801 15.6154 22.2555C15.6154 21.6308 15.1157 21.1238 14.5 21.1238Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="tp-header-logo">
                                            <div className="d-flex justify-content-between align-items-center">
                                            <Link to={'/'}>
                                                    <img src={BharatAi} alt="" className="logo-main" />

                                            </Link>
                                               
                                                <span className="tp-btn d-block d-sm-none back-change"
                                                    style={{ padding: "9px 12px", marginLeft: '15px' }}>
                                                    <div id="buttonText"></div>
                                                </span>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-3 col-xl-3">
                                    <div className="tp-header-main-right d-flex align-items-center justify-content-xl-end">
                                        <button className="tp-header-btn d-none d-sm-block pl-40"
                                            style={{ borderRadius: '15px' }}
                                        >
                                            <div className="flip-button-container">
                                                <div className="flip-button">
                                                    <div className="front">
                                                        <span className="tp-btn">
                                                            Get Started Today!
                                                        </span>
                                                    </div>
                                                    <div className="back">
                                                        <span className="tp-btn" style={{ background: '#4CAF50', important: 'true' }}>
                                                            Create your own bot
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <a href="home-main.html">
                            <img src={BharatAiLogo} alt="logo" style={{ width: "150px", marginTop: '12px' }} />
                        </a>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="offcanvas__popup">
                        <p>
                            World’s first and the highest ROI delivering human-centric
                            conversational and generative AI platform
                        </p>
                        <div
                            className="d-flex justify-content-center align-items-start flex-column gap-4 mb-10"
                            style={{ fontWeight: "600" }}
                        >
                            <span onclick={scrollToDiv('about-area')}>
                                <span
                                    style={{
                                        fontSize: "large",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                         color: "black"
                                    }}
                                >
                                    <i
                                        className="fa-solid fa-globe"
                                        style={{
                                            fontSize: '18px',
                                            marginRight: '20px',
                                        }}
                                    ></i>
                                    About
                                </span>
                            </span>

                            <span onclick={scrollToDiv('services')}>
                                <span
                                    style={{
                                        fontSize: 'large',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                         color: "black"
                                    }}
                                >
                                    <i
                                        className="fa-solid fa-gear"
                                        style={{
                                            fontSize: '18px',
                                            marginRight: '20px',
                                        }}></i>
                                    Services
                                </span>
                            </span>
                            <span onclick={scrollToDiv('clients-feedback')}>
                                <span
                                    style={{
                                        fontSize: 'large',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                         color: "black"
                                    }}>
                                    <i
                                        className="fa-solid fa-people-simple"
                                        style={{
                                            fontSize: '18px',
                                            marginRight: '20px',
                                        }}></i>
                                    Testimonials
                                </span>
                            </span>
                            <span onclick={scrollToDiv('faq')}>
                                <span
                                    style={{
                                        fontSize: 'large',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        color: "black"
                                    }}>
                                    <i
                                        className="fa-solid fa-question"
                                        style={{
                                            fontSize: '18px',
                                            marginRight: '20px',
                                        }}></i>
                                    FAQ
                                </span>
                                {/* <!-- <span className="tp-btn mt-20"
                  >Faq <i className="fa-regular fa-arrow-right-long"></i
                ></span> --> */}
                            </span>

                            <a
                                href="https://corover.ai/home/"
                                style={{ textDecoration: 'none', color: 'black' }}
                                target="_blank"
                                without rel="noreferrer"
                            >
                                <span
                                    style={{
                                        fontSize: 'large',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                         color: "black"
                                    }}
                                >
                                    <i
                                        className="fa-solid fa-cart-arrow-down"
                                        style={{
                                            fontSize: '18px',
                                            marginRight: '20px',
                                        }}
                                    ></i>
                                    Products
                                </span>
                            </a>
                            <a
                                href="https://corover.ai/home/"
                                style={{ textDecoration: 'none', color: 'black' }}
                                target="_blank"
                                without rel="noreferrer"
                            >
                                <span
                                    style={{
                                        fontSize: 'large',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                         color: "black"
                                    }}
                                >
                                    <i
                                        className="fa-solid fa-money-bill-1-wave"
                                        style={{ fontSize: '18px', important: 'true', marginRight: '20px' }}
                                    ></i>
                                    Pricing
                                </span>
                            </a>

                            <span onclick={scrollToDiv('video-gallery')}>
                                <span
                                    style={{
                                        fontSize: 'large',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                         color: "black"
                                    }}
                                >
                                    <i
                                        className="fa-solid fa-video"
                                        style={{ fontSize: '18px', important: 'true', marginRight: '20px' }}
                                    ></i>
                                    Video Gallery
                                </span>
                            </span>
                            <span onclick={scrollToDiv('community')}>
                                <span
                                    style={{
                                        fontSize: 'large',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                         color: "black"
                                    }}
                                >
                                    <i
                                        className="fa-solid fa-people-arrows"
                                        style={{ fontSize: '18px', important: 'true', marginRight: '20px' }}
                                    ></i>
                                    Developer Community
                                </span>
                            </span>
                        </div>
                    </div>
                    <div
                        className="tp-hero-btn"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                    >
                        <span className="tp-btn mt-20">
                            Reach Us <i className="fa-regular fa-arrow-right-long"></i>
                        </span>
                    </div>
                    <div className="offcanvas__social mt-20">
                        <a
                            className="icon facebook"
                            style={{ borderRadius: '50%' }}
                            href="https://www.facebook.com/CoRover"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            className="icon twitter"
                            style={{ borderRadius: '50%' }}
                            href="https://x.com/i/flow/login?redirect_after_login=%2FCoRover_App"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            className="icon youtube"
                            style={{ borderRadius: '50%' }}
                            href="https://www.youtube.com/c/CoRoverApp"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a
                            className="icon linkedin"
                            style={{ borderRadius: '50%' }}
                            href="https://www.linkedin.com/company/corover"
                            target="_blank"
                            without rel="noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Navbar

import React, { useState } from "react";
import BharatAi from "../Assets/images/bharatai.jpg";
import BharatAiLogo from "../Assets/images/bharatai.jpg";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import EditPencil from "../Components/EditPencil";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleExternalClick = () => {
    window.open("https://builder.corover.ai/#/auth/signin", "_blank"); // Open external link in new tab
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div
        className="back-to-top-wrapper"
        style={{ display: visible ? "inline" : "none" }}
      >
        <a
          type="button"
          className="back-to-top-btn"
          href="https://corover.ai/demo"
          target="_blank"
          style={{ color: "white" }}
          onmouseover="this.style.color='white'"
          onmouseout="this.style.color='white'"
          rel={"noreferrer"}
        >
          Book a Demo
        </a>
      </div>
      <header
        className="tp-header-area tp-header-height p-relative"
        style={{ background: "white" }}
      >
        <div
          id="header-sticky"
          className="tp-header-bottom header__sticky p-relative"
        >
          <div className="tp-header-bottom-space p-relative">
            <div className="container-fluid gx-0">
              <div className="row gx-0 align-items-center justify-content-between">
                <div
                  className="col-xxl-3 col-xl-4"
                  style={{
                    paddingLeft: "0",
                    paddingRight: "0",
                    important: "true",
                  }}
                >
                  <div className="tp-header-main-left d-flex align-items-center p-relative">
                    <div
                      className="tp-header-hamburger-btn offcanvas-open-btn"
                      data-background="assets/img/icon/header-hamburger-shape.png"
                    >
                      <button className="hamburger-btn" onClick={handleShow}>
                        <span>
                          <svg
                            width="29"
                            height="24"
                            viewBox="0 0 29 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 1.13163C0 0.506972 0.499692 0 1.11538 0H20.4487C21.0644 0 21.5641 0.506972 21.5641 1.13163C21.5641 1.7563 21.0644 2.26327 20.4487 2.26327H1.11538C0.499692 2.26327 0 1.7563 0 1.13163ZM27.8846 10.5619H1.11538C0.499692 10.5619 0 11.0689 0 11.6935C0 12.3182 0.499692 12.8252 1.11538 12.8252H27.8846C28.5003 12.8252 29 12.3182 29 11.6935C29 11.0689 28.5003 10.5619 27.8846 10.5619ZM14.5 21.1238H1.11538C0.499692 21.1238 0 21.6308 0 22.2555C0 22.8801 0.499692 23.3871 1.11538 23.3871H14.5C15.1157 23.3871 15.6154 22.8801 15.6154 22.2555C15.6154 21.6308 15.1157 21.1238 14.5 21.1238Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="tp-header-logo">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to={"/"}>
                          <img src={BharatAi} alt="" className="logo-main" />
                        </Link>

                        {/* <span
                          className="tp-btn d-block d-sm-none back-change"
                          style={{ padding: "9px 12px", marginLeft: "15px" }}
                        >
                          <div id="buttonText"></div>
                        </span> */}
                        <a
                          target="_blank"
                          href="https://builder.corover.ai/#/auth/signin"
                          className="tp-btn d-block d-sm-none back-change"
                          style={{ padding: "9px 12px", marginLeft: "15px" }}
                        >
                          <div id="buttonText"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-xl-3">
                  <div className="tp-header-main-right d-flex align-items-center justify-content-xl-end">
                    <button
                      className="tp-header-btn d-none d-sm-block pl-40"
                      style={{ borderRadius: "15px" }}
                      onClick={handleExternalClick}
                    >
                      <div className="flip-button-container">
                        <div className="flip-button">
                          <div className="front">
                            <span className="tp-btn" id="get-started-btn">
                              Get Started Today!
                            </span>
                          </div>
                          <div className="back">
                            <span
                              className="tp-btn"
                              style={{
                                background: "#FF6900",
                                important: "true",
                              }}
                            >
                              <EditPencil
                                id={38}
                                existing={"Create your own bot"}
                                content_type={"txt"}
                              >
                                Create your own bot
                              </EditPencil>
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

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ paddingLeft: "40px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a href="/">
              <img
                src={BharatAiLogo}
                alt="logo"
                style={{ width: "150px", margin: "20px 0" }}
              />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas__popup">
            <div
              className="d-flex justify-content-center align-items-start flex-column gap-3 mb-10"
              style={{ fontWeight: "600" }}
            >
              <Link to={'/'}>
                <span>
                  <span
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: "100",
                      color: "grey",
                    }}
                  >
                    <i
                      className="fa-solid fa-home"
                      style={{
                        fontSize: "15px",
                        marginRight: "13px",
                        color: "grey",
                      }}
                    ></i>
                    Home
                  </span>
                </span>
              </Link>
              {/* <Link to={"#about-area"}> */}
              <a
                href="https://corover.ai/about-us/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                without
                rel="noreferrer"
              >
                <span onclick={() => scrollToDiv("about-area")}>
                  <span
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: "100",
                      color: "grey",
                    }}
                  >
                    <i
                      className="fa-solid fa-globe"
                      style={{
                        fontSize: "15px",
                        marginRight: "13px",
                        color: "grey",
                      }}
                    ></i>
                    <EditPencil
                      id={39}
                      existing={"   About"}
                      content_type={"txt"}
                    >
                      About
                    </EditPencil>
                  </span>
                </span>
              </a>
              {/* </Link> */}
              <a
                href="https://corover.ai/products/conversational-ai-platform/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                without
                rel="noreferrer"
              >
                <span
                  style={{
                    fontSize: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    fontWeight: "100",
                    color: "grey",
                  }}
                >
                  <i
                    className="fa-solid fa-cart-arrow-down"
                    style={{
                      fontSize: "15px",
                      marginRight: "13px",
                      color: "grey",
                    }}
                  ></i>
                  <EditPencil
                    id={43}
                    existing={"Products"}
                    content_type={"txt"}
                  >
                    Products
                  </EditPencil>
                </span>
              </a>
              <Link to={"/business-benefits"}>
                <span onclick={() => navigate("/business-benefits")}>
                  <span
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: "100",
                      color: "grey",
                    }}
                  >
                    <i
                      className="fa-solid fa-briefcase"
                      style={{
                        fontSize: "15px",
                        marginRight: "13px",
                        color: "grey",
                      }}
                    ></i>
                    <EditPencil
                      id={42}
                      existing={"Business Benefits"}
                      content_type={"txt"}
                    >
                      Business Benefits
                    </EditPencil>
                  </span>
                </span>
              </Link>
              <a
                href="https://corover.ai/corover-partner-program/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                without
                rel="noreferrer"
              >
                <span
                  style={{
                    fontSize: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    fontWeight: "100",
                    color: "grey",
                  }}
                >
                  <i
                    className="fa-solid fa-handshake"
                    style={{
                      fontSize: "15px",
                      marginRight: "13px",
                      color: "grey",
                    }}
                  ></i>
                  <EditPencil
                    id={47}
                    existing={"Become a partner"}
                    content_type={"txt"}
                  >
                    Become a Partner
                  </EditPencil>
                </span>
              </a>
              <Link to={"/#community"}>
                <span onclick={() => scrollToDiv("community")}>
                  <span
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: "100",
                      color: "grey",
                    }}
                  >
                    <i
                      className="fa-solid fa-people-arrows"
                      style={{
                        fontSize: "15px",
                        marginRight: "13px",
                        color: "grey",
                      }}
                    ></i>
                    <EditPencil
                      id={46}
                      existing={"Developer Community"}
                      content_type={"txt"}
                    >
                      Developer Community
                    </EditPencil>
                  </span>
                </span>
              </Link>

              {/* <Link to={"#services"}>
                <span onclick={() => scrollToDiv("services")}>
                  <span
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: "100",
                    }}
                  >
                    <i
                      className="fa-solid fa-gear"
                      style={{
                        fontSize: "15px",
                        marginRight: "13px",
                        color: "grey",
                      }}
                    ></i>
                    <EditPencil
                      id={40}
                      existing={"Services"}
                      content_type={"txt"}
                    >
                      Services
                    </EditPencil>
                  </span>
                </span>
              </Link> */}
              {/* <Link to={"#clients-feedback"}> */}
              <a
                href="https://corover.ai/testimonials/"
                target="_blank"
                style={{ textDecoration: "none" }}
                without
                rel="noreferrer"
              >
                <span onclick={() => scrollToDiv("clients-feedback")}>
                  <span
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: "100",
                      color: "grey",
                    }}
                  >
                    <i
                      className="fa-solid fa-people-simple"
                      style={{
                        fontSize: "15px",
                        marginRight: "13px",
                        color: "grey",
                      }}
                    ></i>
                    <EditPencil
                      id={41}
                      existing={"Testimonials"}
                      content_type={"txt"}
                    >
                      Testimonials
                    </EditPencil>
                  </span>
                </span>
              </a>
              {/* </Link> */}
              {/* <Link to={"#video-gallery"}> */}
              <a
                href="https://corover.ai/videos/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                without
                rel="noreferrer"
              >
                <span onclick={() => scrollToDiv("video-gallery")}>
                  <span
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      fontWeight: "100",
                      color: "grey",
                    }}
                  >
                    <i
                      className="fa-solid fa-video"
                      style={{
                        fontSize: "15px",
                        marginRight: "13px",
                        color: "grey",
                      }}
                    ></i>
                    <EditPencil
                      id={45}
                      existing={"Video Gallery"}
                      content_type={"txt"}
                    >
                      Video Gallery
                    </EditPencil>
                  </span>
                </span>
              </a>
              {/* </Link> */}
              {/* <a
                href="https://corover.ai/quote/"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
                without
                rel="noreferrer"
              >
                <span
                  style={{
                    fontSize: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    fontWeight: "100",
                    color: "grey",
                  }}
                >
                  <i
                    className="fa-solid fa-briefcase"
                    style={{
                      fontSize: "15px",
                      marginRight: "13px",
                      color: "grey",
                    }}
                  ></i>
                  <EditPencil
                    id={44}
                    existing={"Professional Service"}
                    content_type={"txt"}
                  >
                    Professional Service
                  </EditPencil>
                </span>
              </a> */}
            </div>
          </div>
          <div
            className="tp-hero-btn"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <span
              className="tp-btn mt-20"
              style={{ cursor: "pointer", display: "flex", width: "150px" }}
            >
              <EditPencil id={48} existing={"Reach Us"} content_type={"txt"}>
                Reach Us
              </EditPencil>
              <i className="fa-regular fa-arrow-right-long"></i>
            </span>
          </div>
          {localStorage.getItem("token") && (
            <button onClick={logout}>
              <span
                className="tp-btn mt-20"
                style={{ cursor: "pointer", background: "red" }}
              >
                Logout
              </span>
            </button>
          )}

          <div className="offcanvas__social mt-20">
            <a
              href="https://www.facebook.com/CoRover"
              target="_blank"
              className="icon facebook"
              style={{
                borderRadius: "50%",
                border: "1px solid gray",
                display: "inline-block",
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
              }}
            >
              <i className="fab fa-facebook-f" style={{ color: "grey" }}></i>
            </a>
            <a
              href="https://x.com/CoRover_App"
              target="_blank"
              className="icon twitter"
              style={{
                borderRadius: "50%",
                border: "1px solid gray",
                display: "inline-block",
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
              }}
            >
              <i className="fab fa-twitter" style={{ color: "grey" }}></i>
            </a>
            <a
              href="https://www.youtube.com/c/CoRoverApp"
              target="_blank"
              className="icon youtube"
              style={{
                borderRadius: "50%",
                border: "1px solid gray",
                display: "inline-block",
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
              }}
            >
              <i className="fab fa-youtube" style={{ color: "grey" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/company/corover"
              target="_blank"
              className="icon linkedin"
              style={{
                borderRadius: "50%",
                border: "1px solid gray",
                display: "inline-block",
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
              }}
              without
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" style={{ color: "grey" }}></i>
            </a>
            <a
              href="https://www.instagram.com/corover/"
              target="_blank"
              className="icon instagram"
              style={{
                borderRadius: "50%",
                border: "1px solid gray",
                display: "inline-block",
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
              }}

              rel="noreferrer"
            >
              <i className="fab fa-instagram" style={{ color: "grey" }}></i>
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar;

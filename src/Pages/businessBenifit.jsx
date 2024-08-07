import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import contentContext from "../utils/contentContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerS from "../Assets/images/businessBenifit.jpg";
import BusinessBenifitImage from "../Assets/images/business.png";
import Competitive from "../Assets/images/Competitive.jpg";
import RiskImage from "../Assets/images/risk.jpg";
import Operational from "../Assets/images/operational.jpg";
import Enhanced from "../Assets/images/enhance.jpg";
import EditPencil from "../Components/EditPencil";
import axiosInstance from "../utils/axios";

const BusinessBenifit = () => {
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
  }, []);

  const [activeTab, setActiveTab] = useState("#business-benefits"); // Default active tab

  const handleTabClick = (event, href) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveTab(href); // Set the clicked tab as active

    // Scroll to the corresponding section
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Navbar />
      <section
        className="breadcrumb__area breadcrumb-style pt-100 pb-100 p-relative z-index-1 breadcrumb__area-mobile"
        style={{ backgroundSize: "100%", backgroundImage: `url(${BannerS})` }}
      >
        <div class="breadcrumb__bg-overlay m-img"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="breadcrumb__content text-center">
                <h3 class="breadcrumb__title">
                  <EditPencil
                    id={124}
                    existing={fetchedData[124]?.display_content}
                    content_type={"txt"}
                  >
                    {fetchedData[124]?.display_content}
                  </EditPencil>
                  <img src="assets/img/breadcrumb/titile.svg" alt="" />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-service-details-area pt-20 mt-40 pb-120">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-12 col-lg-4 hide-on-mobile mb-md-0">
              <div className="tp-service-widget">
                <div className="tp-service-widget-item mb-40">
                  <div className="tp-service-widget-tab">
                    <ul>
                      <li>
                        <EditPencil
                          id={125}
                          existing={fetchedData[125]?.display_content}
                          content_type={"txt"}
                        >
                          <a
                            href="#business-benefits"
                            className={
                              activeTab === "#business-benefits" ? "active" : ""
                            }
                            onClick={(e) =>
                              handleTabClick(e, "#business-benefits")
                            }
                          >

                            {fetchedData[125]?.display_content}
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </a>
                        </EditPencil>
                      </li>
                      <li>
                        <EditPencil
                          id={126}
                          existing={fetchedData[126]?.display_content}
                          content_type={"txt"}
                        >
                          <a
                            href="#enhanced-employee-experience"
                            className={
                              activeTab === "#enhanced-employee-experience"
                                ? "active"
                                : ""
                            }
                            onClick={(e) =>
                              handleTabClick(e, "#enhanced-employee-experience")
                            }
                          >
                            {fetchedData[126]?.display_content}
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </a>
                        </EditPencil>
                      </li>
                      <li>
                        <EditPencil
                          id={127}
                          existing={fetchedData[127]?.display_content}
                          content_type={"txt"}
                        >
                          <a
                            href="#operational-efficiency"
                            className={
                              activeTab === "#operational-efficiency"
                                ? "active"
                                : ""
                            }
                            onClick={(e) =>
                              handleTabClick(e, "#operational-efficiency")
                            }
                          >
                            {fetchedData[127]?.display_content}
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </a>
                        </EditPencil>
                      </li>
                      <li>
                        <EditPencil
                          id={128}
                          existing={fetchedData[128]?.display_content}
                          content_type={"txt"}
                        >
                          <a
                            href="#risk-mitigation"
                            className={
                              activeTab === "#risk-mitigation" ? "active" : ""
                            }
                            onClick={(e) => handleTabClick(e, "#risk-mitigation")}
                          >
                            {fetchedData[128]?.display_content}
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </a>
                        </EditPencil>
                      </li>
                      <li>
                        <EditPencil
                          id={129}
                          existing={fetchedData[129]?.display_content}
                          content_type={"txt"}
                        >
                          <a
                            href="#competitive-advantage"
                            className={
                              activeTab === "#competitive-advantage"
                                ? "active"
                                : ""
                            }
                            onClick={(e) =>
                              handleTabClick(e, "#competitive-advantage")
                            }
                          >
                            {fetchedData[129]?.display_content}

                            <i className="fa-regular fa-arrow-right-long"></i>
                          </a>
                        </EditPencil>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 mb-5 mb-md-0">
              <div className="tp-service-details-wrapper">
                {/* Business Benefits Section */}
                <div id="business-benefits" className="mb-5">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="tp-service-details-title">
                        <EditPencil
                          id={125}
                          existing={fetchedData[125]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[125]?.display_content}
                        </EditPencil>
                      </h3>
                      <p className="fs-6">
                        <EditPencil
                          id={130}
                          existing={fetchedData[130]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[130]?.display_content}
                        </EditPencil>

                      </p>
                      <p className="fs-6">
                        <EditPencil
                          id={131}
                          existing={fetchedData[131]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[131]?.display_content}
                        </EditPencil>
                      </p>
                      <div className="col-md-12">
                        <div className="tp-service-details-thumb">
                          <EditPencil
                            id={147}
                            existing={fetchedData[147]?.display_content}
                            content_type={"img"}
                          >
                            <img
                              src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[147]?.display_content}`}
                              alt="Business Benefits"
                              className="img-fluid w-100 mb-4"
                              height={30}
                            />
                          </EditPencil>
                        </div>
                      </div>
                      <p className="fs-6">
                        <EditPencil
                          id={132}
                          existing={fetchedData[132]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[132]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">
                        <EditPencil
                          id={133}
                          existing={fetchedData[133]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[133]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">
                        <EditPencil
                          id={134}
                          existing={fetchedData[134]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[134]?.display_content}
                        </EditPencil>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Employee Experience Section */}
                <div id="enhanced-employee-experience" className="row mb-5">
                  <div className="col-lg-6 col-md-12 mb-4">
                    <div className="tp-service-details-thumb p-relative">
                      <EditPencil
                        id={148}
                        existing={fetchedData[148]?.display_content}
                        content_type={"img"}
                      >
                        <img
                          src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[148]?.display_content}`}
                          alt="Enhanced Employee Experience"
                          className="img-fluid w-100"
                        />
                      </EditPencil>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">
                        <EditPencil
                          id={126}
                          existing={fetchedData[126]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[126]?.display_content}
                        </EditPencil>
                      </h3>
                      <p className="fs-6">
                        <EditPencil
                          id={135}
                          existing={fetchedData[135]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Personalized benefits:</strong>{fetchedData[135]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">
                        <EditPencil
                          id={136}
                          existing={fetchedData[136]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Improved engagement:</strong>  {fetchedData[136]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">
                        <EditPencil
                          id={137}
                          existing={fetchedData[137]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Increased productivity:</strong> {fetchedData[137]?.display_content}
                        </EditPencil>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional sections like Operational Efficiency, Risk Mitigation, Competitive Advantage */}
                <div id="operational-efficiency" className="row mb-5">
                  <div className="col-lg-6 col-md-12">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">
                        <EditPencil
                          id={127}
                          existing={fetchedData[127]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[127]?.display_content}
                        </EditPencil>
                      </h3>
                      <p className="fs-6">

                        <EditPencil
                          id={138}
                          existing={fetchedData[138]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Cost reduction:</strong> {fetchedData[138]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">
                        <EditPencil
                          id={139}
                          existing={fetchedData[139]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Data-driven insights:</strong> {fetchedData[139]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">

                        <EditPencil
                          id={140}
                          existing={fetchedData[140]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Reduced administrative burden:</strong> {fetchedData[140]?.display_content}
                        </EditPencil>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mb-4">
                    <div className="tp-service-details-thumb p-relative">
                      <EditPencil
                        id={149}
                        existing={fetchedData[149]?.display_content}
                        content_type={"img"}
                      >
                        <img
                          src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[149]?.display_content}`}
                          alt="Operational Efficiency"
                          className="img-fluid w-100"
                        />
                      </EditPencil>
                    </div>
                  </div>
                </div>
                <div id="risk-mitigation" className="row mb-5">
                  <div className="col-lg-6 col-md-12 mb-4">
                    <div className="tp-service-details-thumb p-relative">
                      <EditPencil
                        id={150}
                        existing={fetchedData[150]?.display_content}
                        content_type={"img"}
                      >
                        <img
                          src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[150]?.display_content}`}
                          alt="Risk Mitigation"
                          className="img-fluid w-100"
                        />
                      </EditPencil>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">
                        <EditPencil
                          id={128}
                          existing={fetchedData[128]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[128]?.display_content}
                        </EditPencil>
                      </h3>
                      <p className="fs-6">

                        <EditPencil
                          id={141}
                          existing={fetchedData[141]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Compliance adherence:</strong> {fetchedData[141]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">

                        <EditPencil
                          id={142}
                          existing={fetchedData[142]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Fraud prevention:</strong> {fetchedData[142]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">
                        <EditPencil
                          id={143}
                          existing={fetchedData[143]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Data security: </strong> {fetchedData[143]?.display_content}
                        </EditPencil>
                      </p>
                    </div>
                  </div>
                </div>
                <div id="competitive-advantage" className="row mb-5">
                  <div className="col-lg-6 col-md-12">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">
                        <EditPencil
                          id={129}
                          existing={fetchedData[129]?.display_content}
                          content_type={"txt"}
                        >
                          {fetchedData[129]?.display_content}
                        </EditPencil>
                      </h3>
                      <p className="fs-6">
                        <EditPencil
                          id={144}
                          existing={fetchedData[144]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Attracting top talent:</strong> {fetchedData[144]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">
                        <EditPencil
                          id={145}
                          existing={fetchedData[145]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Improved employee well-being:</strong> {fetchedData[145]?.display_content}
                        </EditPencil>
                      </p>
                      <p className="fs-6">

                        <EditPencil
                          id={146}
                          existing={fetchedData[146]?.display_content}
                          content_type={"txt"}
                        >
                          <strong>Stronger employer brand: </strong> {fetchedData[146]?.display_content}
                        </EditPencil>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mb-4">
                    <div className="tp-service-details-thumb p-relative">
                      <EditPencil
                        id={151}
                        existing={fetchedData[151]?.display_content}
                        content_type={"img"}
                      >

                        <img
                          src={`${axiosInstance.defaults.baseURL}/uploads/${fetchedData[151]?.display_content}`}
                          alt="Competitive Advantage"
                          className="img-fluid w-100"
                        />
                      </EditPencil>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* old */}
      {/* <section className=" z-index-1">
        <h3 className="text-center pt-5 pb-3">
          Business Benefits of Gen AI based Virtual Benefits
        </h3>
        <div className="breadcrumb__bg-overlay m-img"></div>
        <div className="container">
          <div>
            <p className="fs-6">
              The platform BharatGPT has its unique features, which have direct
              business benefits. The platform offers 14 Indian/Vernacular
              languages through voice, 22 Indian/Vernacular Languages for text
              modality and 100+ Foreign/International Languages across
              platforms.
            </p>
            <p className="fs-6">
              The BharatGPT Platform offers a choice of multi-foundational LLMS
              and is almost No Code/Low Code configuration box. The platform is
              available for professionals from all walks of life, as it does not
              require a signee to have technology background.
            </p>
            <p className="fs-6">
              The conversational Virtual Assistants, developed using BharatGPT
              platform are industry agnostic and support countless use cases,
              having SLA bound proficiency. These Virtual Assistants have
              contextual, historic and transactional capabilities, having
              potential of extreme integrations across third party applications
              like ERP, CRM, Payment Gateways, Manufacturing Floor Assemblies.
            </p>
            <p className="fs-6">
              The Conversational Dashboard from CoRover.ai makes the top
              management experience elevated and easy. The Virtual Assistants
              developed using BharatGPT have text, voice and video based
              conversational abilities, in lines with human like conversation.
            </p>
            <p className="fs-6">
              A businesses can transform themselves and drive employee
              satisfaction, operational efficiency, and competitive advantage,
              ultimately creating a more efficient, cost-effective, and
              employee-centric organization.
            </p>
            <h4>Enhanced Employee Experience</h4>
            <p className="fs-6">
              <strong>Personalized benefits:</strong> Utilizing Gen AI to
              analyze analytics to deliver tailored benefit packages aligned
              with individual employee needs, preferences, and demographics,
              fostering increased satisfaction and loyalty.{" "}
            </p>
            <p className="fs-6">
              <strong>Improved engagement:</strong> Through implementing
              AI-powered chatbots to provide real-time instant answers to
              employee queries about benefit, reducing administrative burdens
              and enhancing employee engagement. This interactive and engaging
              Gen AI platform will boost employee satisfaction and loyalty.
            </p>
            <p className="fs-6">
              <strong>Increased productivity:</strong> Empowering employees with
              anytime, anywhere access to virtual benefits, providing them
              greater flexibility, and convenience. Quick and easy access to
              information can save employees time and reduce administrative
              burdens, optimizing work-life balance and productivity.
            </p>
           
            <h4>Operational Efficiency</h4>
            <p className="fs-6">
              <strong>Cost reduction:</strong> Leverage Gen AI to automate
              benefit administration processes, resulting in substantial cost
              reductions for the businesses.
            </p>
            <p className="fs-6">
              <strong>Data-driven insights:</strong> Employ Gen AI analytics to
              optimize benefit packages, identify cost-saving opportunities, and
              inform businesses strategic decision-making.
            </p>
            <p className="fs-6">
              <strong>Reduced administrative burden:</strong> Gen AI-powered
              platforms can simplify the automated process for both employees
              and HR, freeing up HR resources to focus on strategic initiatives
            </p>

            <h4>Risk Mitigation</h4>
            <p className="fs-6">
              <strong>Compliance adherence:</strong> Adherence to complex
              regulatory and industry standards is increasingly critical for
              businesses. These compliance mandates are time-consuming and
              resource intensive. Gen AI can streamline this process by ensuring
              compliance with benefit regulations.
            </p>
            <p className="fs-6">
              <strong>Fraud prevention:</strong> Protect against financial
              losses by utilizing Gen AI to detect and prevent fraudulent
              benefit claims.
            </p>
            <p className="fs-6">
              <strong>Data security: </strong> Implement robust Gen AI-powered
              security measures to safeguard employee information and maintain
              data privacy.
            </p>
            <h4>Competitive Advantage</h4>
            <p className="fs-6">
              <strong>Attracting top talent:</strong> Securing top talent is
              crucial for a business to become successful. Intense competition
              for skilled professionals makes talent acquisition challenging. By
              leveraging Gen AI to offer innovative and flexible benefits,
              organizations can differentiate themselves in the job market and
              attract top talent.
            </p>
            <p className="fs-6">
              <strong>Improved employee well-being:</strong> Invest in employee
              well-being by providing comprehensive, Gen AI-tailored benefit
              packages.
            </p>
            <p className="fs-6">
              <strong>Stronger employer brand: </strong> A focus on employee
              well-being through Gen AI enhances an organization's reputation.
            </p>
          </div>
        </div>
      </section> */}
      <Footer data={fetchedData} />
    </div >
  );
};

export default BusinessBenifit;

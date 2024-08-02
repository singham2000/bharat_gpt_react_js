import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import contentContext from "../utils/contentContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerS from "../Assets/images/awardsBaaner.jpg";
import BusinessBenifitImage from "../Assets/images/businessBenifits.jpg";

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
  }, [location]);
  const [activeTab, setActiveTab] = useState("Business Benefits");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar />
      <section
        className="breadcrumb__area breadcrumb-style pt-100 pb-100 mb-60 p-relative z-index-1"
        style={{ backgroundSize: "100%", backgroundImage: `url(${BannerS})` }}
        data-background="assets/img/banners.png"
      >
        <div class="breadcrumb__bg-overlay m-img"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="breadcrumb__content text-center">
                <h3 class="breadcrumb__title">
                  Business Benefits of Gen AI based Virtual Benefits
                  <img src="assets/img/breadcrumb/titile.svg" alt="" />
                </h3>
                {/* <div class="breadcrumb__list breadcrumb__list-translate">
                  <span>
                    <a href="home.html">Home</a>
                  </span>
                  <span class="dvdr">
                    <i class="fa-regular fa-angle-right"></i>
                  </span>
                  <span>pages</span>
                  <span class="dvdr">
                    <i class="fa-regular fa-angle-right"></i>
                  </span>
                  <span>Service Details</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-service-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-service-widget">
                <div className="tp-service-widget-item mb-40">
                  <div className="tp-service-widget-tab">
                    <ul>
                      <li>
                        <a className="active" href="#business-benefits">
                          Business Benefits
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#enhanced-employee-experience">
                          Enhanced Employee Experience
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#operational-efficiency">
                          Operational Efficiency
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#risk-mitigation">
                          Risk Mitigation
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#competitive-advantage">
                          Competitive Advantage
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="tp-service-details-wrapper">
                {/* Business Benefits Section */}
                <div id="business-benefits">
                  <div className="tp-service-details-thumb">
                    <img src={BusinessBenifitImage} alt="Business Benefits" />
                  </div>
                  <h3 className="tp-service-details-title">
                    Business Benefits
                  </h3>
                  <p className="fs-6">
                    The platform BharatGPT has its unique features, which have
                    direct business benefits. The platform offers 14
                    Indian/Vernacular languages through voice, 22
                    Indian/Vernacular Languages for text modality and 100+
                    Foreign/International Languages across platforms.
                  </p>
                  <p className="fs-6">
                    The BharatGPT Platform offers a choice of multi-foundational
                    LLMS and is almost No Code/Low Code configuration box. The
                    platform is available for professionals from all walks of
                    life, as it does not require a signee to have technology
                    background.
                  </p>
                  <p className="fs-6">
                    The conversational Virtual Assistants, developed using
                    BharatGPT platform are industry agnostic and support
                    countless use cases, having SLA bound proficiency. These
                    Virtual Assistants have contextual, historic and
                    transactional capabilities, having potential of extreme
                    integrations across third party applications like ERP, CRM,
                    Payment Gateways, Manufacturing Floor Assemblies.
                  </p>
                  <p className="fs-6">
                    The Conversational Dashboard from CoRover.ai makes the top
                    management experience elevated and easy. The Virtual
                    Assistants developed using BharatGPT have text, voice and
                    video based conversational abilities, in lines with human
                    like conversation.
                  </p>
                  <p className="fs-6">
                    A businesses can transform themselves and drive employee
                    satisfaction, operational efficiency, and competitive
                    advantage, ultimately creating a more efficient,
                    cost-effective, and employee-centric organization.
                  </p>
                </div>

                {/* Enhanced Employee Experience Section */}
                <div id="enhanced-employee-experience" className="row">
                  <div className="col-lg-6">
                    <div className="tp-service-details-thumb p-relative">
                      <img
                        src="assets/img/services/service-details/img-2.jpg"
                        alt=""
                      />
                      <div className="tp-video-play text-center">
                        <a
                          className="popup-video effect-1 effect-2"
                          href="https://www.youtube.com/watch?v=hQIfjJbIy6o&amp;ab_channel=GaanBanglaTV"
                        >
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">
                        Enhanced Employee Experience
                      </h3>
                      <p className="fs-6">
                        <strong>Personalized benefits:</strong> Utilizing Gen AI
                        to analyze analytics to deliver tailored benefit
                        packages aligned with individual employee needs,
                        preferences, and demographics, fostering increased
                        satisfaction and loyalty.{" "}
                      </p>
                      <p className="fs-6">
                        <strong>Improved engagement:</strong> Through
                        implementing AI-powered chatbots to provide real-time
                        instant answers to employee queries about benefit,
                        reducing administrative burdens and enhancing employee
                        engagement. This interactive and engaging Gen AI
                        platform will boost employee satisfaction and loyalty.
                      </p>
                      <p className="fs-6">
                        <strong>Increased productivity:</strong> Empowering
                        employees with anytime, anywhere access to virtual
                        benefits, providing them greater flexibility, and
                        convenience. Quick and easy access to information can
                        save employees time and reduce administrative burdens,
                        optimizing work-life balance and productivity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operational Efficiency Section */}
                <div id="operational-efficiency" className="row">
                  <div className="col-lg-6">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">
                        Operational Efficiency
                      </h3>
                      <p className="fs-6">
                        <strong>Cost reduction:</strong> Leverage Gen AI to
                        automate benefit administration processes, resulting in
                        substantial cost reductions for the businesses.
                      </p>
                      <p className="fs-6">
                        <strong>Data-driven insights:</strong> Employ Gen AI
                        analytics to optimize benefit packages, identify
                        cost-saving opportunities, and inform businesses
                        strategic decision-making.
                      </p>
                      <p className="fs-6">
                        <strong>Reduced administrative burden:</strong> Gen
                        AI-powered platforms can simplify the automated process
                        for both employees and HR, freeing up HR resources to
                        focus on strategic initiatives
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-service-details-thumb p-relative">
                      <img
                        src="assets/img/services/service-details/img-2.jpg"
                        alt=""
                      />
                      <div className="tp-video-play text-center">
                        <a
                          className="popup-video effect-1 effect-2"
                          href="https://www.youtube.com/watch?v=hQIfjJbIy6o&amp;ab_channel=GaanBanglaTV"
                        >
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Mitigation Section */}
                <div id="risk-mitigation" className="row">
                  <h3 className="tp-service-details-title">Risk Mitigation</h3>
                  <p className="fs-6">
                    <strong>Compliance adherence:</strong> Adherence to complex
                    regulatory and industry standards is increasingly critical
                    for businesses. These compliance mandates are time-consuming
                    and resource intensive. Gen AI can streamline this process
                    by ensuring compliance with benefit regulations.
                  </p>
                  <p className="fs-6">
                    <strong>Fraud prevention:</strong> Protect against financial
                    losses by utilizing Gen AI to detect and prevent fraudulent
                    benefit claims.
                  </p>
                  <p className="fs-6">
                    <strong>Data security: </strong> Implement robust Gen
                    AI-powered security measures to safeguard employee
                    information and maintain data privacy.
                  </p>
                </div>

                {/* Competitive Advantage Section */}
                <div id="competitive-advantage" className="row">
                  <div className="col-lg-6">
                    <div className="tp-service-details-thumb p-relative">
                      <img
                        src="assets/img/services/service-details/img-2.jpg"
                        alt=""
                      />
                      <div className="tp-video-play text-center">
                        <a
                          className="popup-video effect-1 effect-2"
                          href="https://www.youtube.com/watch?v=hQIfjJbIy6o&amp;ab_channel=GaanBanglaTV"
                        >
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">
                        Competitive Advantage
                      </h3>
                      <p className="fs-6">
                        <strong>Attracting top talent:</strong> Securing top
                        talent is crucial for a business to become successful.
                        Intense competition for skilled professionals makes
                        talent acquisition challenging. By leveraging Gen AI to
                        offer innovative and flexible benefits, organizations
                        can differentiate themselves in the job market and
                        attract top talent.
                      </p>
                      <p className="fs-6">
                        <strong>Improved employee well-being:</strong> Invest in
                        employee well-being by providing comprehensive, Gen
                        AI-tailored benefit packages.
                      </p>
                      <p className="fs-6">
                        <strong>Stronger employer brand: </strong> A focus on
                        employee well-being through Gen AI enhances an
                        organization's reputation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default BusinessBenifit;

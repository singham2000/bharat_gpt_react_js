import React from "react";
import ShapeBg from "../Assets/images/fun-fact/shape-2.png";
import EditPencil from "../Components/EditPencil";

const SupportArea = ({ data }) => {
  return (
    <section
      id="faq"
      className="tp-support-area tp-support-bg p-relative pb-110"
    >
      <div className="tp-fun-fact-shape">
        <img
          className="shape-2_copy"
          src="assets/img/fun-fact/shape-2.png"
          alt=""
        />
      </div>
      <div className="container container-large">
        <div className="tp-fun-fact-shape">
          <img alt="" />
          <img className="shape-2_copy" src={ShapeBg} alt="" />
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-support-title-wrapper text-center">
              <span className="tp-section-title__pre">
                <EditPencil
                  id={58}
                  existing={data[58]?.display_content}
                  content_type={"txt"}
                >
                  {" "}
                  {data[58]?.display_content}
                  {/* The Best Gen AI */}
                </EditPencil>
                <span className="title-pre-color">
                  {" "}
                  <EditPencil
                    id={59}
                    existing={data[59]?.display_content}
                    content_type={"txt"}
                  >
                    {data[59]?.display_content}
                    {/* Assistant */}
                  </EditPencil>{" "}
                </span>
                <h3 className="tp-section-title">
                  <span className="title-color">
                    <EditPencil
                      id={60}
                      existing={data[60]?.display_content}
                      content_type={"txt"}
                    >
                      {" "}
                      {data[60]?.display_content}
                      {/* Business Benefits */}
                    </EditPencil>
                  </span>
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
                        fill="rgb(128,128,128)"
                      />
                    </svg>
                  </span>
                </h3>
              </span>
            </div>

            <div className="tp-support-faq faq-style-1">
              <div className="tp-faq-tab-content tp-accordion">
                <div className="accordion" id="general_accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <EditPencil
                          id={61}
                          existing={data[61]?.display_content}
                          content_type={"txt"}
                        >
                          {data[61]?.display_content}
                          {/* Versatility */}
                        </EditPencil>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          <EditPencil
                            id={62}
                            existing={data[62]?.display_content}
                            content_type={"txt"}
                          >
                            {data[62]?.display_content}
                            {/* BharatGPT is highly versatile, able to handle a wide
                            range of natural language processing tasks,
                            including text classification, sentiment analysis,
                            language translation, and more. This makes it an
                            ideal solution for a wide range of industries and
                            applications. */}
                          </EditPencil>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <EditPencil
                          id={63}
                          existing={data[63]?.display_content}
                          content_type={"txt"}
                        >
                          {data[63]?.display_content}
                          Accessibility
                        </EditPencil>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          <EditPencil
                            id={64}
                            existing={data[64]?.display_content}
                            content_type={"txt"}
                          >
                            {data[64]?.display_content}
                            {/* BharatGPT is designed to be accessible to anyone,
                            regardless of their level of technical expertise or
                            experience with NLP. Whether you’re a researcher, a
                            business owner, or anyone else, BharatGPT is here to
                            help you break down language barriers and unlock new
                            insights. */}
                          </EditPencil>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <EditPencil
                          id={65}
                          existing={data[65]?.display_content}
                          content_type={"txt"}
                        >
                          {data[65]?.display_content}
                          {/* Accuracy */}
                        </EditPencil>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          <EditPencil
                            id={66}
                            existing={data[66]?.display_content}
                            content_type={"txt"}
                          >
                            {data[66]?.display_content}
                            {/* One of the key benefits of using BharatGPT is its
                            accuracy. By leveraging the latest advances in AI
                            and machine learning, BharatGPT is able to
                            accurately process and analyze Indian language text
                            data, giving you insights and information that you
                            can trust. */}
                          </EditPencil>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <EditPencil
                          id={66}
                          existing={data[66]?.display_content}
                          content_type={"txt"}
                        >
                          {" "}
                          {data[66]?.display_content}
                          {/* Scalability */}
                        </EditPencil>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          <EditPencil
                            id={67}
                            existing={data[67]?.display_content}
                            content_type={"txt"}
                          >
                            {data[67]?.display_content}
                            {/* BharatGPT has been designed to be scalable, making
                            it suitable for use in a variety of settings, from
                            small research projects to large-scale business
                            applications. */}
                          </EditPencil>
                        </p>
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

export default SupportArea;

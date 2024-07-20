import React from "react";
import EditPencil from "../Components/EditPencil";

const Developer = ({ handleOpenModal, handleCloseModal, data }) => {
  return (
    <section
      class="breadcrumb__area breadcrumb-style pt-20 pb-20 p-relative z-index-1"
      id="community"
      style={{ height: "max-content", marginBottom: "5px" }}
    >
      <div class="breadcrumb__bg-overlay m-img"></div>
      <div class="container mb-10" style={{ marginBottom: "10px" }}>
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="breadcrumb__content text-center">
              <h3 class="breadcrumb__title">
                <EditPencil
                  id={21}
                  existing={data[92]?.display_content}
                  content_type={"txt"}
                >
                  {data[21]?.display_content}
                  {/* Developer Community */}
                </EditPencil>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid gx-0">
        <div class="row row-equal-height gx-0">
          <div
            class="feature-3-active swiper-container"
            style={{ height: "auto", padding: "20px 50px " }}
          >
            <div class="d-flex flex-lg-row flex-column gap-3">
              <div class="col-lg-4 col-md-6 col-equal-height">
                <div class="tp-feature-3-content-inner d-flex align-items-center text-decoration-none">
                  <div class="tp-feature-3-content">
                    <h3 class="tp-feature-title">
                      <EditPencil
                        id={22}
                        existing={data[22]?.display_content}
                        content_type={"txt"}
                      >
                        {data[22]?.display_content}
                        {/* Support */}
                      </EditPencil>
                    </h3>
                    <p>
                      <EditPencil
                        id={23}
                        existing={data[23]?.display_content}
                        content_type={"txt"}
                      >
                        {data[23]?.display_content}
                        {/* Get assistance from our experts to troubleshoot and
                        resolve your queries. */}
                      </EditPencil>
                      <br />
                    </p>
                    <span
                      class="text-decoration-none d-flex flex-row justify-content-start align-items-center"
                      data-toggle="modal"
                      data-target="#supportModal"
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={() => handleOpenModal(1)}
                    >
                      Know more <i class="fa fa-link-simple pl-10"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-equal-height">
                <div class="tp-feature-3-content-inner d-flex align-items-center text-decoration-none">
                  <div class="tp-feature-3-content">
                    <h3 class="tp-feature-title">
                      <EditPencil
                        id={24}
                        existing={data[24]?.display_content}
                        content_type={"txt"}
                      >
                        {data[24]?.display_content}
                        {/* Hire an Expert */}
                      </EditPencil>
                    </h3>
                    <p>
                      <EditPencil
                        id={25}
                        existing={data[25]?.display_content}
                        content_type={"txt"}
                      >
                        {data[25]?.display_content}
                        {/* Connect with skilled professionals for your project
                        needs. */}
                      </EditPencil>
                    </p>
                    <span
                      class="text-decoration-none d-flex flex-row justify-content-start align-items-center"
                      data-toggle="modal"
                      data-target="#supportModal"
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={() => handleOpenModal(2)}
                    >
                      Know more <i class="fa fa-link-simple pl-10"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-equal-height">
                <div class="tp-feature-3-content-inner d-flex align-items-center text-decoration-none">
                  <div class="tp-feature-3-content">
                    <h3 class="tp-feature-title">
                      <EditPencil
                        id={26}
                        existing={data[26]?.display_content}
                        content_type={"txt"}
                      >
                        {data[26]?.display_content}
                        {/* Learn & Share */}
                      </EditPencil>
                    </h3>
                    <p>
                      <EditPencil
                        id={27}
                        existing={data[27]?.display_content}
                        content_type={"txt"}
                      >
                        {data[27]?.display_content}
                        {/* Expand your knowledge and contribute to the community by
                        sharing insights. */}
                      </EditPencil>
                    </p>
                    <span
                      class="text-decoration-none d-flex flex-row justify-content-start align-items-center"
                      data-toggle="modal"
                      data-target="#supportModal"
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={() => handleOpenModal(3)}
                    >
                      Know more <i class="fa fa-link-simple pl-10"></i>
                    </span>
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

export default Developer;

import React from "react";
import ShapeTwo from "../Assets/images/brand/shape-2.png";
import Count from "./Count";
import EditPencil from "../Components/EditPencil";

const Brand = ({ data }) => {
  return (
    //  < !--brand area start-- >

    <section class="tp-support-feature-area pb-30">
      <div class="container  container-large">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="row abc tp-support-feature-item">
              <div class="col-lg-4 col-4">
                <div class="tp-support-feature-counter">
                  <div class="tp-support-feature-thumb">
                    <img src={ShapeTwo} alt="" />
                  </div>
                  <h3
                    className="support-feature-title"
                    style={{ fontSize: "25px" }}
                  >
                    <span
                      data-purecounter-duration="4"
                      data-purecounter-end="12"
                      className="purecounter"
                    >
                      <Count number={12} duration={4} text={"+"} />
                    </span>
                  </h3>
                </div>
              </div>
              <div class="col-lg-8 col-8">
                <div class="tp-support-feature-content">
                  <h4 class="tp-support-feature-content-title">
                    <EditPencil
                      id={17}
                      existing={data[17]?.display_content}
                      content_type={"txt"}
                    >
                      {data[17]?.display_content}
                      {/* India's 1st Gen AI */}
                    </EditPencil>
                  </h4>
                  <p>
                    <EditPencil
                      id={18}
                      existing={data[18]?.display_content}
                      content_type={"txt"}
                    >
                      {data[18]?.display_content}
                    </EditPencil>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="row abc tp-support-feature-item">
              <div class="col-lg-4 col-4">
                <div class="tp-support-feature-counter">
                  <div class="tp-support-feature-thumb">
                    <img src={ShapeTwo} alt="" />
                  </div>
                  <h3
                    className="support-feature-title"
                    style={{ fontSize: "25px" }}
                  >
                    <span className="purecounter">
                      <Count number={120} text={"+"} duration={4} />
                    </span>
                  </h3>
                </div>
              </div>
              <div class="col-lg-8 col-8">
                <div class="tp-support-feature-content">
                  <h4 class="tp-support-feature-content-title">
                    <EditPencil
                      id={86}
                      existing={data[17]?.display_content}
                      content_type={"txt"}
                    >
                      {data[86]?.display_content}
                      {/* Omni-Channel */}
                    </EditPencil>
                  </h4>
                  <p>
                    <EditPencil
                      id={19}
                      existing={data[19]?.display_content}
                      content_type={"txt"}
                    >
                      {data[19]?.display_content}
                      {/* Multi-Lingual, Multi Format Platform with 120+ Languages. */}
                    </EditPencil>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="row abc tp-support-feature-item">
              <div class="col-lg-4 col-4">
                <div class="tp-support-feature-counter">
                  <div class="tp-support-feature-thumb">
                    <img src={ShapeTwo} alt="" />
                  </div>
                  <h3
                    className="support-feature-title"
                    style={{ fontSize: "25px" }}
                  >
                    <span className="purecounter">
                      <Count number={120} text={"+"} duration={4} />
                    </span>
                  </h3>
                </div>
              </div>
              <div class="col-lg-8 col-8">
                <div class="tp-support-feature-content">
                  <h4 class="tp-support-feature-content-title">
                    <EditPencil
                      id={87}
                      existing={data[87]?.display_content}
                      content_type={"txt"}
                    >
                      {data[87]?.display_content}
                      {/* 10X Faster */}
                    </EditPencil>
                  </h4>
                  <p>
                    <EditPencil
                      id={20}
                      existing={data[20]?.display_content}
                      content_type={"txt"}
                    >
                      {/* Human-Centric Conversational AI Implementation. */}
                      {data[20]?.display_content}
                    </EditPencil>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //    <!--brand area end-- >
  );
};

export default Brand;

import React from "react";
const Developer = () => {
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
                Developer Community
                <img src="assets/img/breadcrumb/titile.svg" alt="" />
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
                    <h3 class="tp-feature-title">Support</h3>
                    <p>
                      Get assistance from our experts to troubleshoot and
                      resolve your queries. <br />
                    </p>
                    <span
                      class="text-decoration-none d-flex flex-row justify-content-start align-items-center"
                      data-toggle="modal"
                      data-target="#supportModal"
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      Know more <i class="fa fa-link-simple pl-10"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-equal-height">
                <div class="tp-feature-3-content-inner d-flex align-items-center text-decoration-none">
                  <div class="tp-feature-3-content">
                    <h3 class="tp-feature-title">Hire an Expert</h3>
                    <p>
                      Connect with skilled professionals for your project needs.
                    </p>
                    <span
                      class="text-decoration-none d-flex flex-row justify-content-start align-items-center"
                      data-toggle="modal"
                      data-target="#supportModal"
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      Know more <i class="fa fa-link-simple pl-10"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-equal-height">
                <div class="tp-feature-3-content-inner d-flex align-items-center text-decoration-none">
                  <div class="tp-feature-3-content">
                    <h3 class="tp-feature-title">Learn & Share</h3>
                    <p>
                      Expand your knowledge and contribute to the community by
                      sharing insights.
                    </p>
                    <span
                      class="text-decoration-none d-flex flex-row justify-content-start align-items-center"
                      data-toggle="modal"
                      data-target="#supportModal"
                      style={{ cursor: "pointer", color: "blue" }}
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

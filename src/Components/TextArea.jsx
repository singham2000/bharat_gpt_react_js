import React, { useRef } from "react";
import Corover from "../Assets/images/picturesss/corover.jpg";
import GoogleMicrosoft from "../Assets/images/picturesss/googleMicro.png";
import Mahindra from "../Assets/images/picturesss/mahindra.png";
import Npci from "../Assets/images/picturesss/npci.png";
import Irctc from "../Assets/images/picturesss/irctc.png";
import Slider from "react-slick";

const TextArea = () => {
  const setting = {
    speed: 3500,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnFocus: false,
    pauseOnHover: true,
  };
  const sliderRef = useRef(null);
  return (
    //    <!-- text slider area start -->
    <section className="tp-text-slider-area fix pt-100 pb-100">
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-lg-12">
            <Slider {...setting} ref={sliderRef} className="tp-text-active">
              <div className="tp-text-item">
                <div className="tp-text-slider-wrapper">
                  <div className="tp-text-slider-item d-flex align-items-center">
                    <img src={Corover} alt="" />
                  </div>
                </div>
              </div>
              <div className="tp-text-item">
                <div className="tp-text-slider-wrapper">
                  <div className="tp-text-slider-item d-flex align-items-center">
                    <img src={GoogleMicrosoft} height="100px" alt="" />
                  </div>
                </div>
              </div>
              <div className="tp-text-item">
                <div className="tp-text-slider-wrapper">
                  <div className="tp-text-slider-item d-flex align-items-center">
                    <img src={Mahindra} height="100px" alt="" />
                  </div>
                </div>
              </div>
              <div className="tp-text-item">
                <div className="tp-text-slider-wrapper">
                  <div className="tp-text-slider-item d-flex align-items-center">
                    <img src={Npci} height="100px" alt="" />
                  </div>
                </div>
              </div>
              <div className="tp-text-item">
                <div className="tp-text-slider-wrapper">
                  <div className="tp-text-slider-item d-flex align-items-center">
                    <img src={Irctc} height="100px" alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
    //  <!-- text slider area end -->
  );
};

export default TextArea;

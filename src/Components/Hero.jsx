import React, { useRef } from 'react';
import ShapeOne from '../Assets/images/shape-1.png';
import ShapeTwo from '../Assets/images/shape-4.png';
import BannerOne from '../Assets/images/banner1.jpg';
import EditPencil from '../Components/EditPencil';
const Hero = () => {
    const refA = useRef(null);
    return (
        <section ref={refA} className="tp-hero-area tp-hero-space">
            <div className="tp-hero-wrapper p-relative">
                <div className="hero-active-1 swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide banner" >
                            <div className="tp-hero-inner-1">
                                <div className="container">
                                    <div className="tp-hero-shape">
                                        <img className="shape-1" src={ShapeOne} alt="shape1" />
                                        <img className="shape-4" src={ShapeTwo} alt="shape2" />
                                    </div>

                                    <div className="tp-hero-1">
                                        <div className="tp-hero-bg tp-hero-overlay p-relative" style={{ backgroundImage: `url(${BannerOne})` }}></div>
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <div className="tp-hero-content p-relative">
                                                    <div className="tp-hero-title-wrapper">
                                                        <span className="tp-section-title__pre p-relative">
                                                        <EditPencil>
                                                            Redefine Efficiency using
                                                        </EditPencil>
                                                            <span className="title-pre-color" style={{ marginLeft: '13px' }}>
                                                            <EditPencil>
                                                                human-centric bots
                                                            </EditPencil>
                                                                </span>
                                                        </span>
                                                        <h3 className="tp-hero-title">
                                                        <EditPencil>
                                                            Introducing
                                                        </EditPencil>
                                                            <span className="title-color" style={{ marginLeft: '13px' }}>India's First </span>
                                                            <br />
                                                            <span className="title-text-transparent" >
                                                            <EditPencil>
                                                                Gen AI Platform
                                                            </EditPencil>
                                                            </span>
                                                        </h3>
                                                        <div className="tp-hero-btn">
                                                            <a className="tp-btn" href="https://builder.corover.ai/#/auth/signin" rel="noreferrer" target="_blank">Learn More
                                                                <i className="fa-regular fa-arrow-right-long"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="tp-hero-shape-animation">
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
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
    )
}

export default Hero

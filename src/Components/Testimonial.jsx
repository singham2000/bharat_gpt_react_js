import React from 'react'
import TestimonialBg from '../Assets/images/testimonial/testimonial-bg.jpg';
import User1 from '../Assets/images/testimonial/user-1.jpg';
import User2 from '../Assets/images/testimonial/user-2.jpg';
import User3 from '../Assets/images/testimonial/user-3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
    const setting = {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            '991': {
            },
            '768': {
                slidesPerView: 3,
            },
            '767': {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    }
    return (
        //    < !--testimonial area start-- >
        <section className="tp-testimonial-area p-relative pb-55" style={{ paddingTop: '5px' }} id="clients-feedback">
            <div className="container container-large">
                <div className="tp-testimonial-bg">
                    <img src={TestimonialBg} alt="" />
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-testimonial-title-wrapper text-center">
                            <span className="tp-section-title__pre">
                                Client’s <span className="title-pre-color">Feedback</span>
                            </span>
                            <h3 className="tp-section-title">
                                Testimonial
                                <span className="title-color">& Feedback</span>

                                <span className="title-center-shape">
                                    <svg width="194" height="5" viewBox="0 0 194 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M193.649 4.22307C129.517 2.55338 65.7543 2.288 1.66891 4.99709C-0.571625 5.09661 -0.540924 2.60867 1.66891 2.48703C65.34 -0.962917 130.116 -1.06243 193.649 3.70336C194.109 3.73653 194.125 4.23412 193.649 4.22307Z"
                                            fill="rgb(0,186,0)" />
                                    </svg>
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="tp-testimonial-box-wrapper">
                        <div className="testimonial-active swiper-container">
                            <Swiper {...setting}>
                                <SwiperSlide>
                                    <div className="tp-testimonial-item text-center mb-10">
                                        <div className="tp-testimonial-item-inner">
                                            <div className="tp-testimonial-quot">
                                                <span>
                                                    <svg width="45" height="35" viewBox="0 0 45 35" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M14.9973 0.631122L16.7189 3.11787C12.7647 5.36549 10.3073 7.90914 8.77102 10.386C7.17389 12.961 6.58902 15.4368 6.33023 17.3777L6.19305 18.4066L7.08309 17.8726C8.22226 17.1891 9.86775 16.9388 11.5585 17.1804L11.5662 17.1815L11.574 17.1823C15.8927 17.6622 19.2191 21.0061 19.2191 25.5337C19.2191 27.659 18.2736 29.8166 16.8239 31.5139C15.16 33.1714 13.2726 33.882 10.8708 33.882C8.23854 33.882 5.83892 32.6833 4.40682 31.2559C1.96161 28.5633 0.5 25.6485 0.5 20.7303C0.5 12.2579 6.47223 4.66787 14.9973 0.631122ZM40.2782 0.631121L41.9998 3.11787C38.0456 5.36549 35.5882 7.90914 34.0519 10.386C32.4548 12.961 31.8699 15.4368 31.6111 17.3777L31.474 18.4066L32.364 17.8726C33.5032 17.1891 35.1487 16.9388 36.8394 17.1804L36.8471 17.1815L36.8549 17.1823C41.1737 17.6622 44.5 21.0061 44.5 25.5337C44.5 27.6651 43.5491 29.8289 42.0923 31.5285C40.6996 33.1533 38.5856 33.882 36.1517 33.882C33.5194 33.882 31.1198 32.6833 29.6877 31.2559C27.2425 28.5633 25.7809 25.6485 25.7809 20.7303C25.7809 12.2579 31.7531 4.66787 40.2782 0.631121Z"
                                                            stroke="currentColor" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <p style={{ height: '280px', overflowY: 'scroll', scrollbarWidth: '4px' }}>
                                                We are thrilled to partner with CoRover to bring
                                                BharatGPT for the public sector in India. Technology
                                                truly has the potential to transform lives and our
                                                language and generative AI capabilities built into the
                                                platform will make access easy and democratise the use
                                                of the platform
                                            </p>
                                            <div className="tp-testimonial-rating d-flex justify-content-center">
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-regular fa-star-half-stroke"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="tp-testimonial-user-thumb">
                                            <img src={User1} alt="" />
                                        </div>
                                        <div className="tp-testimonial-designation">
                                            <h4 className="testimonial-title">Bikram Singh Bedi</h4>
                                            <p>Managing director, Google Cloud India</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="tp-testimonial-item text-center mb-10">
                                        <div className="tp-testimonial-item-inner">
                                            <div className="tp-testimonial-quot">
                                                <span><svg width="45" height="35" viewBox="0 0 45 35" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.9973 0.631122L16.7189 3.11787C12.7647 5.36549 10.3073 7.90914 8.77102 10.386C7.17389 12.961 6.58902 15.4368 6.33023 17.3777L6.19305 18.4066L7.08309 17.8726C8.22226 17.1891 9.86775 16.9388 11.5585 17.1804L11.5662 17.1815L11.574 17.1823C15.8927 17.6622 19.2191 21.0061 19.2191 25.5337C19.2191 27.659 18.2736 29.8166 16.8239 31.5139C15.16 33.1714 13.2726 33.882 10.8708 33.882C8.23854 33.882 5.83892 32.6833 4.40682 31.2559C1.96161 28.5633 0.5 25.6485 0.5 20.7303C0.5 12.2579 6.47223 4.66787 14.9973 0.631122ZM40.2782 0.631121L41.9998 3.11787C38.0456 5.36549 35.5882 7.90914 34.0519 10.386C32.4548 12.961 31.8699 15.4368 31.6111 17.3777L31.474 18.4066L32.364 17.8726C33.5032 17.1891 35.1487 16.9388 36.8394 17.1804L36.8471 17.1815L36.8549 17.1823C41.1737 17.6622 44.5 21.0061 44.5 25.5337C44.5 27.6651 43.5491 29.8289 42.0923 31.5285C40.6996 33.1533 38.5856 33.882 36.1517 33.882C33.5194 33.882 31.1198 32.6833 29.6877 31.2559C27.2425 28.5633 25.7809 25.6485 25.7809 20.7303C25.7809 12.2579 31.7531 4.66787 40.2782 0.631121Z"
                                                        stroke="currentColor" />
                                                </svg></span>
                                            </div>
                                            <p style={{ height: '280px', overflowY: 'scroll', scrollbarWidth: '4px' }}>
                                                “AskYukimi a VideoBot created using CoRover’s Human
                                                Centric<br />
                                                Conversational AI platform, has been a huge success in
                                                Japan<br />. We have been fortunate to work with
                                                CoRover as a client and also as their partner
                                            </p>
                                            <div className="tp-testimonial-rating d-flex justify-content-center">
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="tp-testimonial-user-thumb">
                                            <img src={User2} alt="" />
                                        </div>
                                        <div className="tp-testimonial-designation">
                                            <h4 className="testimonial-title">Hazimi Suzuki</h4>
                                            <p>Ceo of innovation Hills Inc</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="tp-testimonial-item text-center mb-10">
                                        <div className="tp-testimonial-item-inner">
                                            <div className="tp-testimonial-quot">
                                                <span><svg width="45" height="35" viewBox="0 0 45 35" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.9973 0.631122L16.7189 3.11787C12.7647 5.36549 10.3073 7.90914 8.77102 10.386C7.17389 12.961 6.58902 15.4368 6.33023 17.3777L6.19305 18.4066L7.08309 17.8726C8.22226 17.1891 9.86775 16.9388 11.5585 17.1804L11.5662 17.1815L11.574 17.1823C15.8927 17.6622 19.2191 21.0061 19.2191 25.5337C19.2191 27.659 18.2736 29.8166 16.8239 31.5139C15.16 33.1714 13.2726 33.882 10.8708 33.882C8.23854 33.882 5.83892 32.6833 4.40682 31.2559C1.96161 28.5633 0.5 25.6485 0.5 20.7303C0.5 12.2579 6.47223 4.66787 14.9973 0.631122ZM40.2782 0.631121L41.9998 3.11787C38.0456 5.36549 35.5882 7.90914 34.0519 10.386C32.4548 12.961 31.8699 15.4368 31.6111 17.3777L31.474 18.4066L32.364 17.8726C33.5032 17.1891 35.1487 16.9388 36.8394 17.1804L36.8471 17.1815L36.8549 17.1823C41.1737 17.6622 44.5 21.0061 44.5 25.5337C44.5 27.6651 43.5491 29.8289 42.0923 31.5285C40.6996 33.1533 38.5856 33.882 36.1517 33.882C33.5194 33.882 31.1198 32.6833 29.6877 31.2559C27.2425 28.5633 25.7809 25.6485 25.7809 20.7303C25.7809 12.2579 31.7531 4.66787 40.2782 0.631121Z"
                                                        stroke="currentColor" />
                                                </svg></span>
                                            </div>
                                            <p
                                                style={{ height: '280px', overflowY: 'scroll', scrollbarWidth: '4px' }}
                                            >
                                                Chatbot, named Ask Disha, has great accuracy of 90%
                                                along with the approx.<br />
                                                85% positive feedback from IRCTC users and has
                                                improved customer and employee engagement.
                                            </p>
                                            <div className="tp-testimonial-rating d-flex justify-content-center">
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="tp-testimonial-user-thumb">
                                            <img src={User3} alt="" />
                                        </div>
                                        <div className="tp-testimonial-designation">
                                            <h4 className="testimonial-title">Sandip Trivedi</h4>
                                            <p>GGM,IRCTC</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="tp-testimonial-item text-center mb-10">
                                        <div className="tp-testimonial-item-inner">
                                            <div className="tp-testimonial-quot">
                                                <span><svg width="45" height="35" viewBox="0 0 45 35" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.9973 0.631122L16.7189 3.11787C12.7647 5.36549 10.3073 7.90914 8.77102 10.386C7.17389 12.961 6.58902 15.4368 6.33023 17.3777L6.19305 18.4066L7.08309 17.8726C8.22226 17.1891 9.86775 16.9388 11.5585 17.1804L11.5662 17.1815L11.574 17.1823C15.8927 17.6622 19.2191 21.0061 19.2191 25.5337C19.2191 27.659 18.2736 29.8166 16.8239 31.5139C15.16 33.1714 13.2726 33.882 10.8708 33.882C8.23854 33.882 5.83892 32.6833 4.40682 31.2559C1.96161 28.5633 0.5 25.6485 0.5 20.7303C0.5 12.2579 6.47223 4.66787 14.9973 0.631122ZM40.2782 0.631121L41.9998 3.11787C38.0456 5.36549 35.5882 7.90914 34.0519 10.386C32.4548 12.961 31.8699 15.4368 31.6111 17.3777L31.474 18.4066L32.364 17.8726C33.5032 17.1891 35.1487 16.9388 36.8394 17.1804L36.8471 17.1815L36.8549 17.1823C41.1737 17.6622 44.5 21.0061 44.5 25.5337C44.5 27.6651 43.5491 29.8289 42.0923 31.5285C40.6996 33.1533 38.5856 33.882 36.1517 33.882C33.5194 33.882 31.1198 32.6833 29.6877 31.2559C27.2425 28.5633 25.7809 25.6485 25.7809 20.7303C25.7809 12.2579 31.7531 4.66787 40.2782 0.631121Z"
                                                        stroke="currentColor" />
                                                </svg></span>
                                            </div>
                                            <p
                                                style={{ height: '280px', overflowY: 'scroll', scrollbarWidth: '4px' }}
                                            >
                                                Chatbot, named Ask Disha, has great accuracy of 90%
                                                along with the approx.<br />
                                                85% positive feedback from IRCTC users and has
                                                improved customer and employee engagement.
                                            </p>
                                            <div className="tp-testimonial-rating d-flex justify-content-center">
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="tp-testimonial-user-thumb">
                                            <img src={User3} alt="" />
                                        </div>
                                        <div className="tp-testimonial-designation">
                                            <h4 className="testimonial-title">Sandip Trivedi</h4>
                                            <p>GGM,IRCTC</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        //  <!--testimonial area end-- >
    )
}

export default Testimonial
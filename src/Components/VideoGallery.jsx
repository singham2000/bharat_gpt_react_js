import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const VideoGallery = () => {
    const setting = {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.team-button-prev-1',
            prevEl: '.team-button-next-1',
        },
        breakpoints: {
            '991': {
                slidesPerView: 3
            },
            '768': {
                slidesPerView: 3,
            },
            '767': {
                slidesPerView: 3,
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
        <section id="video-gallery" className="tp-industry-area p-relative pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-industry-title-wrapper text-center">
                            <h3 className="tp-section-title">
                                Video Gallery
                                <span className="title-center-shape">
                                    <svg width="194" height="5" viewBox="0 0 194 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M193.649 4.22307C129.517 2.55338 65.7543 2.288 1.66891 4.99709C-0.571625 5.09661 -0.540924 2.60867 1.66891 2.48703C65.34 -0.962917 130.116 -1.06243 193.649 3.70336C194.109 3.73653 194.125 4.23412 193.649 4.22307Z"
                                            fill="rgb(0,186,0)"></path>
                                    </svg>
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="tp-industry-wrapper mb-30 fadeRight">
                            <div className="tp-industry-tab">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                            aria-selected="true">
                                            Testimonials
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                            aria-selected="false">
                                            Products and Demos
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                            aria-selected="false">
                                            Awards & Recognitions
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <div className="tp-industry-tab-content">
                                            <div
                                                className="tp-team-nav d-flex justify-content-start justify-content-lg-end align-items-end mb-30">
                                                <button type="button" className="team-button-prev-1 tp-btn-hover-clear alt-color" tabindex="0"
                                                    aria-label="Previous slide">
                                                    <i className="fa-regular fa-arrow-left"></i>
                                                    <b></b>
                                                </button>
                                                <button type="button" className="team-button-next-1 tp-btn-hover-clear alt-color" tabindex="0"
                                                    aria-label="Next slide">
                                                    <i className="fa-regular fa-arrow-right"></i>
                                                    <b></b>
                                                </button>
                                            </div>
                                            <div className="tp-industry-tab-content-inner d-flex mb-30">
                                                <div className="team-active swiper-container hx" style={{ height: '280px', important: 'true' }} >
                                                    <Swiper {...setting}>
                                                        <SwiperSlide>
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe
                                                                            style={{
                                                                                width: '212px',
                                                                                height: '138px',
                                                                                borderRadius: '5px'
                                                                            }}
                                                                            src="https://www.youtube.com/embed/PnZ-nMS-USQ?si=0H6u1uIBrQrH-eU3&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10"
                                                                        style={{ height: 'fit-content' }}
                                                                    >
                                                                        Dr. Pushpendra Singh, IIIT Delhi,
                                                                        Transformative Impact of BharatGPT,
                                                                        Enterprise Adoption.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide >
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe style={{
                                                                            width: '212px',
                                                                            height: '138px',
                                                                            borderRadius: '5px'
                                                                        }}
                                                                            src="https://www.youtube.com/embed/wSfNfFzQFDY?si=WHzmCO3tX1rjY6Ac&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10"
                                                                        style={{ height: 'fit-content' }}
                                                                    >
                                                                        Dr. Vikram Goyal, IIIT Delhi, Experiences
                                                                        in the world of Artificial Intelligence
                                                                        (BharatGPT).
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide >
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe
                                                                            style={{
                                                                                width: '212px',
                                                                                height: '138px',
                                                                                borderRadius: '5px'
                                                                            }}
                                                                            src="https://www.youtube.com/embed/yUiwy7viOHQ?si=R8jGKvhkHNhqgt-8&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        Satya Nadella, Narendra Modi, and many
                                                                        renowned personalities are talking about
                                                                        CoRover.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide >
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe style={{
                                                                            width: '212px',
                                                                            height: '138px',
                                                                            borderRadius: '5px'
                                                                        }}
                                                                            src="https://www.youtube.com/embed/uvO2nQZyATk?si=2QldyEJCEJWDCA7Y&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        Microsoft CEO Satya Nadella talking about
                                                                        CoRover Conversational AI
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </Swiper>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="tp-industry-tab-content">
                                            <div
                                                className="tp-team-nav d-flex justify-content-start justify-content-lg-end align-items-end mb-30">
                                                <button type="button" className="team-button-prev-1 tp-btn-hover-clear alt-color" tabindex="0"
                                                    aria-label="Previous slide">
                                                    <i className="fa-regular fa-arrow-left"></i>
                                                    <b></b>
                                                </button>
                                                <button type="button" className="team-button-next-1 tp-btn-hover-clear alt-color" tabindex="0"
                                                    aria-label="Next slide">
                                                    <i className="fa-regular fa-arrow-right"></i>
                                                    <b></b>
                                                </button>
                                            </div>
                                            <div className="tp-industry-tab-content-inner d-flex mb-30">
                                                <div className="team-active swiper-container hx" style={{ height: '180px', important: 'true' }}>
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe
                                                                            style={{
                                                                                width: '212px',
                                                                                height: '138px',
                                                                                borderRadius: '5px'
                                                                            }}
                                                                            src="https://www.youtube.com/embed/LWpESnrd7Q8?si=zijcgHcApxy3G9eq&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        CoRover.ai द्वारा BharatGPT, भारत का अपना
                                                                        जेनेरेटिव AI, टेक्स्ट, वॉयस और वीडियो के
                                                                        साथ।
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe
                                                                            style={{
                                                                                width: '212px',
                                                                                height: '138px',
                                                                                borderRadius: '5px'
                                                                            }}
                                                                            src="https://www.youtube.com/embed/HbauXLvjBEo?si=AxRT0fFsiUZHNXLv&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        Multilingual Virtual Assistant with Gen
                                                                        AI, powered by the CoRover Conversational
                                                                        AI Platform
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe
                                                                            style={{
                                                                                width: '212px',
                                                                                height: '138px',
                                                                                borderRadius: '5px'
                                                                            }}
                                                                            src="https://www.youtube.com/embed/oUyaemUKbO8?si=B_dVAcMALpAr8aj2&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        Real Time Speech Translation |
                                                                        Simultaneously one to many | CoRover |
                                                                        Bhashini | Google
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe style={{
                                                                            width: '212px',
                                                                            height: '138px',
                                                                            borderRadius: '5px'
                                                                        }}
                                                                            src="https://www.youtube.com/embed/QVhHvPYQlTY?si=Rmen-MielW1c8R7J&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        Yukimi Virtual Assistant is an AI VideoBot
                                                                        (Interactive Digital Twin) in Japan,
                                                                        powered by CoRover.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="tp-industry-tab-content">
                                            <div
                                                className="tp-team-nav d-flex justify-content-start justify-content-lg-end align-items-end mb-10">
                                                <button type="button" className="team-button-prev-1 tp-btn-hover-clear alt-color" tabindex="0"
                                                    aria-label="Previous slide">
                                                    <i className="fa-regular fa-arrow-left"></i>
                                                    <b></b>
                                                </button>
                                                <button type="button" className="team-button-next-1 tp-btn-hover-clear alt-color" tabindex="0"
                                                    aria-label="Next slide">
                                                    <i className="fa-regular fa-arrow-right"></i>
                                                    <b></b>
                                                </button>
                                            </div>
                                            <div className="tp-industry-tab-content-inner d-flex mb-30">
                                                <div className="team-active swiper-container hx" style={{ height: '180px', important: 'true' }}>
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe style={{
                                                                            width: '212px',
                                                                            height: '138px',
                                                                            borderRadius: '5px'
                                                                        }}
                                                                            src="https://www.youtube.com/embed/0TF5CrtvAiA?si=KdeRWr8YYFgpi7Oc&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        India to launch its own Generative AI
                                                                        BharatGPT with CoRover.ai and supported by
                                                                        iHub Anubhuti.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe style={{
                                                                            width: '212px',
                                                                            height: '138px',
                                                                            borderRadius: '5px'
                                                                        }}
                                                                            src="https://www.youtube.com/embed/n2y8BgUqkvk?si=5fSpIE56xdrAf-WM&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        Winner of the National Startup Awards
                                                                        2022.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe style={{
                                                                            width: '212px',
                                                                            height: '138px',
                                                                            borderRadius: '5px'
                                                                        }}
                                                                            src="https://www.youtube.com/embed/bxlwyLaEXMM?si=bvCMsPw_s7xD3RVW&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        AI Virtual Assistant AskDISHA of IRCTC,
                                                                        powered by CoRover | Best Digital
                                                                        Innovation Award.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="tp-team-wrapper p-relative">
                                                                <div className="swiper-slide-x1">
                                                                    <center>
                                                                        <iframe style={{
                                                                            width: '212px',
                                                                            height: '138px',
                                                                            borderRadius: '5px'
                                                                        }}
                                                                            src="https://www.youtube.com/embed/yRqAtQkt1Is?si=XazZS70qz3ulFAML&amp;controls=0"
                                                                            title="YouTube video player" frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                                    </center>
                                                                    <span className="video_label pl-10" style={{ height: 'fit-content' }}>
                                                                        CoRover (Conversational AI Platform) wins
                                                                        Asia Leadership Award
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default VideoGallery

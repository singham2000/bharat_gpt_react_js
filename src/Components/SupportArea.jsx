import React from 'react';
import ShapeBg from '../Assets/images/fun-fact/shape-2.png';


const SupportArea = () => {
    return (

        <section id="faq" className="tp-support-area tp-support-bg p-relative pb-110">
            <div className="tp-fun-fact-shape">
                <img className="shape-2_copy" src="assets/img/fun-fact/shape-2.png" alt="" />
            </div>
            <div className="container container-large">
                <div class="tp-fun-fact-shape">
                    <img  alt=''/>
                    <img class="shape-2_copy" src={ShapeBg} alt="" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-10">
                        <div className="tp-support-title-wrapper text-center">
                            <span className="tp-section-title__pre">
                                The best GEN AI <span className="title-pre-color">assistant</span>
                                <h3 className="tp-section-title">
                                    HUMAN-CENTRIC GEN AI ASSISTANT
                                    <span className="title-color">
                                        WITH VOICE AND VIDEO COMMERCE
                                    </span>
                                    <span className="title-center-shape">
                                        <svg width="194" height="5" viewBox="0 0 194 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M193.649 4.22307C129.517 2.55338 65.7543 2.288 1.66891 4.99709C-0.571625 5.09661 -0.540924 2.60867 1.66891 2.48703C65.34 -0.962917 130.116 -1.06243 193.649 3.70336C194.109 3.73653 194.125 4.23412 193.649 4.22307Z"
                                                fill="rgb(0,186,0)" />
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
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Vernacular Voice Support
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#general_accordion">
                                            <div className="accordion-body">
                                                <p>
                                                    Auto training of multiple languages and dialects
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Multi-device support
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                            data-bs-parent="#general_accordion">
                                            <div className="accordion-body">
                                                <p>Easy integration with POS and ERP systems</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Subset dictionary for high accuracy
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#general_accordion">
                                            <div className="accordion-body">
                                                <p>
                                                    Auto training of unlimited SKUs, Store, Vendor, Ware
                                                    House.
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
    )
}

export default SupportArea

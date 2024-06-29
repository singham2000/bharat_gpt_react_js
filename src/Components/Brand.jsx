import React from 'react';
import ShapeTwo from '../Assets/images/brand/shape-2.png';
import Count from './Count';

const Brand = () => {
    return (
        //  < !--brand area start-- >

        <section className="tp-support-feature-area pb-100 pt-160">
            <div className="container container-large">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="tp-support-feature-item fadeleft d-flex p-relative fadeLeft">
                            <div className="tp-support-feature-counter">
                                <div className="tp-support-feature-thumb">
                                    <img src={ShapeTwo} alt="" />
                                </div>
                                <h3 className="support-feature-title" style={{ fontSize: '25px' }}>
                                    <span data-purecounter-duration="4" data-purecounter-end="12" className="purecounter">
                                        <Count number={12} duration={4} text={'+'} />
                                    </span>
                                </h3>
                            </div>
                            <div className="tp-support-feature-content">
                                <h4 className="tp-support-feature-content-title" style={{ fontSize: '25px' }}>
                                    India's 1st Gen AI
                                </h4>
                                <p>1st LLM in 12+ Indian Languages.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-support-feature-item d-flex p-relative">
                            <div className="tp-support-feature-counter">
                                <div className="tp-support-feature-thumb">
                                    <img src={ShapeTwo} alt="" />
                                </div>
                                <h3 className="support-feature-title" style={{ fontSize: '25px' }}>
                                    <span className="purecounter">
                                        <Count number={120} text={'+'} duration={4} />
                                    </span>
                                </h3>
                            </div>
                            <div className="tp-support-feature-content">
                                <h4 className="tp-support-feature-content-title" style={{ fontSize: '25px' }}>
                                    Omni-Channel
                                </h4>
                                <p>
                                    Multi-Lingual, Multi Format Platform with 120+ Languages.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-support-feature-item d-flex p-relative">
                            <div className="tp-support-feature-counter">
                                <div className="tp-support-feature-thumb">
                                    <img src={ShapeTwo} alt="" />
                                </div>
                                <h3 className="support-feature-title" style={{ fontSize: '25px' }}>
                                    <span className="purecounter">
                                        <Count number={120} text={'+'} duration={4} />
                                    </span>
                                </h3>
                            </div>
                            <div className="tp-support-feature-content">
                                <h4 className="tp-support-feature-content-title" style={{ fontSize: '25px' }}>
                                    10X Faster
                                </h4>
                                <p>
                                    Human-Centric <br />
                                    Conversational AI Implementation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        //    <!--brand area end-- >
    )
}

export default Brand

import React from 'react';
import ShapeTwo from '../Assets/images/brand/shape-2.png';
import Count from './Count';

const Brand = () => {
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
                    <h3 className="support-feature-title" style={{ fontSize: '25px' }}>
                      <span data-purecounter-duration="4" data-purecounter-end="12" className="purecounter">
                        <Count number={12} duration={4} text={'+'} />
                      </span>
                    </h3>
                  </div>
                </div>
                <div class="col-lg-8 col-8">
                  <div class="tp-support-feature-content">
                    <h4 class="tp-support-feature-content-title">
                      India's 1st Gen AI
                    </h4>
                    <p>1st LLM in 12+ Indian Languages.</p>
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
                    <h3 className="support-feature-title" style={{ fontSize: '25px' }}>
                      <span className="purecounter">
                        <Count number={120} text={'+'} duration={4} />
                      </span>
                    </h3>
                  </div>
                </div>
                <div class="col-lg-8 col-8">
                  <div class="tp-support-feature-content">
                    <h4 class="tp-support-feature-content-title">
                      Omni-Channel
                    </h4>
                    <p>
                      Multi-Lingual, Multi Format Platform with 120+ Languages.
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
                    <h3 className="support-feature-title" style={{ fontSize: '25px' }}>
                      <span className="purecounter">
                        <Count number={120} text={'+'} duration={4} />
                      </span>
                    </h3>
                  </div>
                </div>
                <div class="col-lg-8 col-8">
                  <div class="tp-support-feature-content">
                    <h4 class="tp-support-feature-content-title">
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
      
        </div>
      </section>

        //    <!--brand area end-- >
    )
}

export default Brand

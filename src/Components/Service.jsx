import React, { useState, useEffect } from 'react'
import ShapeOne from '../Assets/images/fun-fact/shape-1.png';
import Shadow from '../Assets/images/fun-fact/shadow.png';
import ShapeThree from '../Assets/images/fun-fact/shape-3.png';
import World from '../Assets/images/fun-fact/world.png';
import Count from './Count';

const Service = () => {
    const [reloadClassName, setReloadClassName] = useState(null);
    useEffect(() => {
        const reload = document.getElementById('reload');
        setReloadClassName(reload);
    }, []);

    const scrollRotate = () => {
        reloadClassName.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
    };

    useEffect(() => {
        if (reloadClassName !== null) {
            window.addEventListener('scroll', scrollRotate);
        }
        return () => {
            window.removeEventListener('scroll', scrollRotate);
        };
    }, [reloadClassName, scrollRotate]);

    return (
        <div className="tp-service-funfact-box">
            {/* <!-- service area start --> */}
            <section id="services" className="tp-service-area pt-10 pb-10">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-service-title-wrapper text-center">
                                <span className="tp-section-title__pre">
                                    service <span className="title-pre-color">AI Solutions</span>
                                </span>
                                <h3 className="tp-section-title">
                                    Our Accomplishments with<i> Various Industry </i> Verticals
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
                    </div>
                </div>
            </section>
            {/* <!-- service area end --> */}

            {/* <!-- fun fact area start --> */}
            <section className="tp-fun-fact-area pt-80 pb-65 p-relative">
                <div className="container container-1400">
                    <div className="tp-fun-fact-shape">
                        <img className="shape-1" src={ShapeOne} alt="" />
                        <img className="shape-3" src={ShapeThree} alt="" />
                        <img className="shadow" src={Shadow} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4">
                            <div className="tp-fun-fact-wrapper-box">
                                <div className="tp-fun-fact-wrapper">
                                    <h3 className="counter-title" style={{ fontSize: '50px', important: 'true' }}>
                                        <span className="purecounter">
                                            <Count number={100} duration={2} text={'+'} />
                                        </span>
                                    </h3>
                                    <p>Enterprises</p>
                                </div>
                                <div className="tp-fun-fact-wrapper">
                                    <h3 className="counter-title" style={{ fontSize: '50px', important: 'true' }}>
                                        <span className="purecounter"
                                            style={{ fontSize: '50px', important: 'true' }}>
                                            <Count number={20} duration={2} text={'B+'} />
                                        </span>
                                    </h3>
                                    <p>Interactions</p>
                                </div>
                                <div className="tp-fun-fact-wrapper">
                                    <h3 className={`counter-title`} style={{ fontSize: '50px', important: 'true' }}>
                                        <span className="purecounter">
                                            <Count number={20} text={'M+'} duration={4} />
                                        </span></h3>
                                    <p>Monthly Active Users</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="tp-fun-fact-thumb p-relative">
                                <img id="reload" src={World} alt="scroll" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="tp-fun-fact-content">
                                <div className="tp-fun-fact-title-wrapper">
                                    <h3 className="tp-section-title">
                                        GEN AI VIRTUAL ASSISTANT FOR B2B, B2B2C AND G2C
                                        <span className="title-left-shape">
                                            <svg width="194" height="5" viewBox="0 0 194 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M193.649 4.22307C129.517 2.55338 65.7543 2.288 1.66891 4.99709C-0.571625 5.09661 -0.540924 2.60867 1.66891 2.48703C65.34 -0.962917 130.116 -1.06243 193.649 3.70336C194.109 3.73653 194.125 4.23412 193.649 4.22307Z"
                                                    fill="rgb(0,186,0)" />
                                            </svg>
                                        </span>
                                    </h3>
                                    <p>Easy Product Discovery & Customer Support Automation</p>
                                    <ul>
                                        <li>
                                            <span><svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.794 2.17595C14.426 3.42395 13.094 4.87595 11.798 6.53195C10.67 7.95995 9.656 9.42395 8.756 10.924C7.94 12.268 7.346 13.42 6.974 14.38C6.962 14.416 6.938 14.446 6.902 14.47C6.866 14.506 6.824 14.524 6.776 14.524C6.764 14.536 6.752 14.542 6.74 14.542C6.656 14.542 6.596 14.518 6.56 14.47L0.134 7.93595C0.122 7.92395 0.278 7.76795 0.602 7.46795C0.926 7.15595 1.244 6.87395 1.556 6.62195C1.904 6.33395 2.09 6.20195 2.114 6.22595L5.642 8.99795C6.674 7.78595 7.832 6.58595 9.116 5.39795C11.048 3.62195 13.04 2.10995 15.092 0.861953C15.128 0.861953 15.266 1.02995 15.506 1.36595L15.866 1.88795C15.878 1.93595 15.878 1.98995 15.866 2.04995C15.854 2.09795 15.83 2.13995 15.794 2.17595Z"
                                                    fill="currentColor" />
                                            </svg></span>Connect with consumers virtually and increase
                                            conversion
                                        </li>
                                        <li>
                                            <span><svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.794 2.17595C14.426 3.42395 13.094 4.87595 11.798 6.53195C10.67 7.95995 9.656 9.42395 8.756 10.924C7.94 12.268 7.346 13.42 6.974 14.38C6.962 14.416 6.938 14.446 6.902 14.47C6.866 14.506 6.824 14.524 6.776 14.524C6.764 14.536 6.752 14.542 6.74 14.542C6.656 14.542 6.596 14.518 6.56 14.47L0.134 7.93595C0.122 7.92395 0.278 7.76795 0.602 7.46795C0.926 7.15595 1.244 6.87395 1.556 6.62195C1.904 6.33395 2.09 6.20195 2.114 6.22595L5.642 8.99795C6.674 7.78595 7.832 6.58595 9.116 5.39795C11.048 3.62195 13.04 2.10995 15.092 0.861953C15.128 0.861953 15.266 1.02995 15.506 1.36595L15.866 1.88795C15.878 1.93595 15.878 1.98995 15.866 2.04995C15.854 2.09795 15.83 2.13995 15.794 2.17595Z"
                                                    fill="currentColor" />
                                            </svg></span>Delight customers with Enhanced User Experience
                                        </li>
                                    </ul>
                                    <div className="tp-fun-fact-btn" data-toggle="modal" data-target="#exampleModalCenter">
                                        <span className="tp-btn">Tell us How Can We Help</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- fun fact area end --> */}
        </div>
    )
}

export default Service

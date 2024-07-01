import { useEffect, useState } from 'react';
import React from 'react';
import Trans_Back_Logo from '../Assets/images/logo-trans-back.png';
import axios from 'axios';
const Footer = () => {
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        const { data } = await axios.get('https://www.universal-tutorial.com/api/countries/', {
            headers: {
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzdXJ5YXByYXRhcDg4NTk5QGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IldMUDkzeVp1M2c2VGhWT1BDLXlVSm0tSU03bXhTbTRpZXY3c0R1WXV4elVvRHZTVFJuSm9aUkp6bFRleG4wblE0ek0ifSwiZXhwIjoxNzE5ODk2NzIzfQ.Mq3w0o5BQMY3XuXsyJ7OUASf7hr1BlU0ksRGiDF1c68'}`
            }
        });
        setCountries(data);
    }

    useEffect(() => {

        getCountries();
        return () => {

        }
    }, [])


    return (
        <footer className="tp-footer-area p-relative">
            <div className="tp-footer-bg" data-background="assets/img/footer/footer-bg.jpg"></div>
            <div className="tp-footer-top-shape" data-background="assets/img/footer/footer-top-bg.png"></div>
            <div className="container container-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-footer-top-area">
                            <div className="row align-items-center">
                                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                    <div className="tp-hero-btn" data-toggle="modal" data-target="#exampleModalCenter">
                                        <span className="tp-btn-plus" style={{ fontWeight: '600' }} >Reach Us <i
                                            className="fa-regular fa-arrow-right-long"></i></span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tp-demo-copyright-content text-center">

                                        {/* <!-- <h3 className="text-white">Bharat GPT</h3> --> */}
                                        <img src={Trans_Back_Logo} alt='Bharat GPT' width="300" />
                                    </div>
                                    <div className="tp-demo-copyright-area">
                                        <div className="tp-demo-copyright-content text-center" >
                                            <p style={{ color: '#cac2c2', important: 'true' }}>
                                                India's Foundational Large Language Model
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Modal --> */}
                                <div className="modal fade mt-10 overflow-scroll" id="exampleModalCenter" tabindex="-1" role="dialog"
                                    // eslint-disable-next-line jsx-a11y/aria-props
                                    aria-labelled-by="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header"
                                                style={{ padding: '25px 30px' }}
                                            >
                                                <h3 className="tp-section-title"
                                                    style={{ fontSize: '26px', marginBottom: '0px' }}
                                                >
                                                    REACH<span className="title-color"> US </span>
                                                </h3>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="tp-contact-form">
                                                {/* <!-- <h3 className="tp-contact-form-title">Contact Us</h3> --> */}
                                                <p>
                                                    <i> Required fields are marked *</i>
                                                </p>
                                                <form id="contact-form" action="https://html.hixstudio.net/technix-prv/technix/assets/mail.php"
                                                    method="POST">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="tp-contact-input">
                                                                <input name="name" type="text" placeholder="Your Name*" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="tp-contact-input">
                                                                <input name="email" type="email" placeholder="Email Address*" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="tp-contact-input">
                                                                <input name="text" type="text" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="tp-contact-input">
                                                                <div>
                                                                    <select name="role" id="" className="role-select" style={{ width: '100%', borderColor: 'transparent' }}>
                                                                        <option selected style={{borderColor: 'transparent' }}>
                                                                            What describes you best?
                                                                        </option>
                                                                        <option value="developer">Developer</option>
                                                                        <option value="enterprise">
                                                                            Enterprise
                                                                        </option>
                                                                        <option value="other">Other</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="tp-contact-input">
                                                                <div>
                                                                    <select name="country" id="" className="country-code-select" style={{ width: '100%', borderColor: 'transparent' }}>
                                                                        <option selected style={{borderColor: 'transparent' }}>
                                                                            Country
                                                                        </option>
                                                                        {
                                                                            countries.map((country, index) => (
                                                                                <option key={index} value={country.country_phone_code}>{country.country_name}</option>
                                                                            ))
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="tp-contact-input">
                                                                <textarea name="message" cols="2" placeholder="Description"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 d-flex justify-content-end align-content-end">
                                                            <button className="tp-header-btn pl-40 rounded-2" data-dismiss="modal">
                                                                <span className="tp-btn" style={{ color: 'white', padding: '12px 24px', important: 'true' }} >Close</span>
                                                            </button>
                                                            <button className="tp-header-btn pl-10 rounded-2">
                                                                <span className="tp-btn" style={{ color: 'white', padding: '12px 24px', important: 'true' }}>Submit</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <p className="ajax-response"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 ">
                                    <div className="tp-footer-top-right d-flex justify-content-center align-items-center">
                                        <div className="tp-footer-top-right-headphone">
                                            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.49316 13.7164C3.63379 13.8458 3.84046 13.8759 4.01071 13.7908L11.4654 10.1149L5.90522 14.0488C5.77478 14.1412 5.70122 14.2939 5.71058 14.4538L5.90157 17.7137C5.93936 18.3587 6.06262 18.9045 6.25825 19.2917C6.59438 19.9576 7.06242 20.0322 7.31139 20.0176C7.61259 20 7.90192 19.8421 8.17074 19.5482L9.20637 18.4157L10.8851 19.4378C11.3043 19.6933 11.7985 19.8118 12.3141 19.7816C13.3786 19.7192 14.4435 19.0328 15.0945 17.9905L24.1844 3.42754C24.8108 2.42378 24.7071 1.81746 24.5101 1.48593C24.38 1.26641 24.0445 0.904988 23.2627 0.950786C23.0031 0.965999 22.7113 1.02528 22.3941 1.12637L1.78045 7.70011C0.860734 7.99324 0.267482 8.54997 0.108773 9.26713C-0.0494808 9.98477 0.254344 10.7393 0.964829 11.3921L3.49316 13.7164ZM1.01287 9.46688C1.09713 9.08504 1.46951 8.7707 2.06157 8.58208L22.6756 2.00782C23.23 1.83163 23.6608 1.86665 23.7149 1.95852C23.7648 2.04228 23.7632 2.35484 23.3995 2.93758L14.3102 17.5006C13.8156 18.2927 13.0301 18.8124 12.2603 18.8575C11.9286 18.877 11.6283 18.8065 11.3672 18.6474L9.36306 17.4269C9.27991 17.3767 9.18683 17.3548 9.09535 17.3601C8.97847 17.367 8.86461 17.4181 8.781 17.5097L7.48832 18.9234C7.33843 19.087 7.25818 19.0935 7.2577 19.094C7.1674 19.0715 6.88551 18.6754 6.82599 17.6595L6.65003 14.656L16.785 7.48526C16.9817 7.34623 17.0388 7.07823 16.9149 6.87079C16.7915 6.66195 16.5265 6.58619 16.3129 6.69237L3.88618 12.8204L1.59108 10.7106C1.13392 10.2906 0.928189 9.84874 1.01287 9.46688Z"
                                                    fill="rgb(0,186,0)"></path>
                                            </svg>
                                        </div>
                                        <div className="tp-footer-top-right-content ml-10">
                                            <a href="mailto:chat@CoRover.ai">chat@CoRover.ai</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

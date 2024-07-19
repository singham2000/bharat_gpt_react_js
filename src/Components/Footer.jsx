import { useEffect, useState } from "react";
import Trans_Back_Logo from "../Assets/images/logo-trans-back.png";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Country } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";
import EditPencil from "../Components/EditPencil";

const Footer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountry = Country.getAllCountries();
    console.log("country:", getCountry);
    setCountries(getCountry);
  }, []);
  const [validated, setValidated] = useState(false);

  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    number: "",
    description: "",
    query: "",
  });

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false || !captchaValue) {
      setValidated(true);
      return;
    }

    // Submit the form data along with the reCAPTCHA token
    try {
      const response = await axios.post("/submit", {
        ...formData,
        captchaValue,
      });
      // Handle successful submission (e.g., show a success message)
      console.log(response.data.message);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error(error.response.data.message);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <footer className="tp-footer-area p-relative">
      <div
        className="tp-footer-bg"
        data-background="assets/img/footer/footer-bg.jpg"
      ></div>
      <div
        className="tp-footer-top-shape"
        data-background="assets/img/footer/footer-top-bg.png"
      ></div>
      <div className="container container-large">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-footer-top-area">
              <div className="row align-items-center">
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                  <div
                    className="tp-hero-btn"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    <span className="tp-btn-plus" style={{ fontWeight: "600" }}>
                      Reach Us{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tp-demo-copyright-content text-center">
                    <h3 className="text-white">
                      <EditPencil
                        id={28}
                        existing={"Bharat GPT"}
                        content_type={"txt"}
                      >
                        Bharat GPT
                      </EditPencil>
                    </h3>
                    <img
                      width={300}
                      src={Trans_Back_Logo}
                      alt="corover ai | Bharat GPT"
                    />
                  </div>
                  <div className="tp-demo-copyright-area">
                    <div className="tp-demo-copyright-content text-center">
                      <p style={{ color: " #cac2c2", important: "true" }}>
                        <EditPencil
                          id={29}
                          existing={"India's Foundational Large Language Model"}
                          content_type={"txt"}
                        >
                          India's Foundational Large Language Model
                        </EditPencil>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade mt-10 overflow-scroll"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div
                        className="modal-header"
                        style={{ padding: "25px 30px" }}
                      >
                        <h3
                          className="tp-section-title"
                          style={{ fontSize: "26px", marginBottom: "0px" }}
                        >
                          REACH<span className="title-color"> US </span>
                        </h3>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="tp-contact-form">
                        <p>
                          <i> Required fields are marked *</i>
                        </p>

                        {/* <form
                          id="contact-form"
                          action="https://html.hixstudio.net/technix-prv/technix/assets/mail.php"
                          method="POST"
                        >
                          <div className="row">
                            <div class="col-md-6">
                              <div class="tp-contact-input">
                                <input
                                  name="name"
                                  type="text"
                                  placeholder="Your Name*"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="tp-contact-input">
                                <input
                                  name="email"
                                  type="email"
                                  placeholder="Email Address*"
                                />
                              </div>
                            </div>
                            <div class="col-md-6 mb-3">
                              <div class="tp-contact-input">
                                <select class="countries">
                                  <option value="" selected disabled>
                                    Select Country
                                  </option>
                                  <option value="+91">India +91</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="tp-contact-input">
                                <input
                                  name="text"
                                  id="phone"
                                  type="text"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="tp-contact-input">
                                <div>
                                  <select>
                                    <option selected>
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
                            <div className="col-md-12">
                              <div className="tp-contact-input">
                                <textarea
                                  name="message"
                                  cols="2"
                                  placeholder="Your Query"
                                ></textarea>
                              </div>
                            </div>

                            <input
                              type="text"
                              name="honeypot"
                              style={{ display: "none" }}
                            />

                            <div className="col-md-12">
                              <div className="form-group">
                                <div
                                  className="g-recaptcha"
                                  data-sitekey="YOUR_SITE_KEY"
                                ></div>
                              </div>
                            </div>
                            <div className="col-md-12 d-flex justify-content-end align-content-end">
                              <button
                                className="tp-header-btn pl-40 rounded-2"
                                data-dismiss="modal"
                              >
                                <span
                                  className="tp-btn"
                                  style={{
                                    color: "white",
                                    padding: "12px 24px",
                                    important: "true",
                                  }}
                                >
                                  Close
                                </span>
                              </button>
                              <button className="tp-header-btn pl-10 rounded-2">
                                <span
                                  className="tp-btn"
                                  style={{
                                    color: "white",
                                    padding: "12px 24px",
                                    important: "true",
                                  }}
                                >
                                  Submit
                                </span>
                              </button>
                            </div>
                          </div>
                        </form> */}
                        <Form
                          noValidate
                          validated={validated}
                          onSubmit={handleSubmit}
                        >
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="validationCustom01"
                            >
                              <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                              />
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="validationCustom02"
                            >
                              <Form.Control
                                required
                                type="text"
                                placeholder="Enter your email id"
                              />
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="validationCustom01"
                            >
                              <Form.Control as="select" required>
                                <option value="">Select a country...</option>
                                {countries.map((country) => (
                                  <option
                                    key={country.isoCode}
                                    value={country.isoCode}
                                  >
                                    {country.phonecode}{" "}
                                    {country.name.split("+")[0]}
                                  </option>
                                ))}
                              </Form.Control>
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="validationCustom02"
                            >
                              <Form.Control
                                required
                                type="text"
                                placeholder="Enter your number"
                              />
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="12"
                              controlId="validationCustom01"
                            >
                              <Form.Control as="select" required>
                                <option value="">
                                  What describes you best?
                                </option>

                                <option value="developer">Developer</option>
                                <option value="enterprise">Enterprise</option>
                                <option value="other">Other</option>
                              </Form.Control>
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="12"
                              controlId="validationCustom02"
                            >
                              <Form.Control
                                as="textarea"
                                rows={3}
                                cols={3}
                                required
                                placeholder="your query"
                                // value={query}
                                // onChange={(e) => setQuery(e.target.value)}
                              />
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Col md="12">
                              <ReCAPTCHA
                                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                onChange={handleCaptchaChange}
                              />
                            </Col>
                          </Row>
                          <Button type="submit">Submit form</Button>
                        </Form>
                        <p className="ajax-response"></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="tp-footer-top-right d-flex justify-content-center align-items-center">
                    <div className="tp-footer-top-right-headphone">
                      <svg
                        width="25"
                        height="21"
                        viewBox="0 0 25 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.49316 13.7164C3.63379 13.8458 3.84046 13.8759 4.01071 13.7908L11.4654 10.1149L5.90522 14.0488C5.77478 14.1412 5.70122 14.2939 5.71058 14.4538L5.90157 17.7137C5.93936 18.3587 6.06262 18.9045 6.25825 19.2917C6.59438 19.9576 7.06242 20.0322 7.31139 20.0176C7.61259 20 7.90192 19.8421 8.17074 19.5482L9.20637 18.4157L10.8851 19.4378C11.3043 19.6933 11.7985 19.8118 12.3141 19.7816C13.3786 19.7192 14.4435 19.0328 15.0945 17.9905L24.1844 3.42754C24.8108 2.42378 24.7071 1.81746 24.5101 1.48593C24.38 1.26641 24.0445 0.904988 23.2627 0.950786C23.0031 0.965999 22.7113 1.02528 22.3941 1.12637L1.78045 7.70011C0.860734 7.99324 0.267482 8.54997 0.108773 9.26713C-0.0494808 9.98477 0.254344 10.7393 0.964829 11.3921L3.49316 13.7164ZM1.01287 9.46688C1.09713 9.08504 1.46951 8.7707 2.06157 8.58208L22.6756 2.00782C23.23 1.83163 23.6608 1.86665 23.7149 1.95852C23.7648 2.04228 23.7632 2.35484 23.3995 2.93758L14.3102 17.5006C13.8156 18.2927 13.0301 18.8124 12.2603 18.8575C11.9286 18.877 11.6283 18.8065 11.3672 18.6474L9.36306 17.4269C9.27991 17.3767 9.18683 17.3548 9.09535 17.3601C8.97847 17.367 8.86461 17.4181 8.781 17.5097L7.48832 18.9234C7.33843 19.087 7.25818 19.0935 7.2577 19.094C7.1674 19.0715 6.88551 18.6754 6.82599 17.6595L6.65003 14.656L16.785 7.48526C16.9817 7.34623 17.0388 7.07823 16.9149 6.87079C16.7915 6.66195 16.5265 6.58619 16.3129 6.69237L3.88618 12.8204L1.59108 10.7106C1.13392 10.2906 0.928189 9.84874 1.01287 9.46688Z"
                          fill="#ff6900"
                        ></path>
                      </svg>
                    </div>
                    <div className="tp-footer-top-right-content ml-10">
                      <a href="mailto:chat@CoRover.ai">chat@CoRover.ai</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tp-footer-top-right-copyright">
                <p>
                  <EditPencil
                    id={30}
                    existing={"Copyright ©️ 2024 CoRover®️ P. Limited"}
                    content_type={"txt"}
                  >
                    Copyright ©️ 2024 CoRover®️ P. Limited
                  </EditPencil>
                </p>
              </div>
              <div className="tp-footer-top-right-copyright">
                <p>
                  <EditPencil
                    id={31}
                    existing={"Copyright ©️ 2024 CoRover®️ P. Limited"}
                    content_type={"txt"}
                  >
                    All rights reserved. Patent Pending.
                  </EditPencil>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import Trans_Back_Logo from "../Assets/images/logo-trans-back.png";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Country } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";
import EditPencil from "../Components/EditPencil";
import axiosInstance from "../utils/axios";

const Footer = ({ data }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountry = Country.getAllCountries();
    setCountries(getCountry);
  }, []);
  const [validated, setValidated] = useState(false);

  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    country: "",
    number: "",
    role: "",
    query: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false || !captchaValue) {
      setValidated(true);
      return;
    }

    try {
      await axiosInstance.post("/api/user/sendMail", {
        ...formData,
        captchaValue,
      });
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

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
                  <div className="tp-demo-copyright-content text-center">
                    <div
                      className="tp-hero-btn"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <span
                        className="tp-btn-plus"
                        style={{ fontWeight: "600", cursor: "pointer" }}
                      >
                        Reach Us{" "}
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                      <br></br>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="tp-demo-copyright-content text-center">
                    <h3 className="text-white">
                      <EditPencil
                        id={28}
                        existing={data[28]?.display_content}
                        content_type={"txt"}
                      >
                        {data[28]?.display_content}
                        {/* Bharat GPT */}
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
                          existing={data[29]?.display_content}
                          content_type={"txt"}
                        >
                          {data[29]?.display_content}
                          {/* India's Foundational Large Language Model */}
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
                        style={{ padding: "20px 20px" }}
                      >
                        <h3
                          className="tp-section-title"
                          style={{
                            fontSize: "26px",
                            marginBottom: "0px",
                            cursor: "pointer",
                          }}
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
                                name="name"
                                placeholder="Enter your name"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                Please enter your name.
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              md="6"
                              className="mt-3 mt-md-0"
                              controlId="validationCustom02"
                            >
                              <Form.Control
                                required
                                name="email"
                                placeholder="Enter your email id"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                Please enter a valid email.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="validationCustom01"
                            >
                              <Form.Control
                                as="select"
                                required
                                name="country"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                              >
                                <option value="">Select a country...</option>
                                {countries.map((country) => (
                                  <option
                                    key={country.isoCode}
                                    value={country.name}
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
                              className="mt-3 mt-md-0"
                              controlId="validationCustom02"
                            >
                              <Form.Control
                                required
                                type="text"
                                name="number"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                  })
                                }
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
                              <Form.Control
                                as="select"
                                required
                                name="role"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                              >
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
                                name="query"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                              />
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Col md="12" className="text-end">
                              <ReCAPTCHA
                                sitekey="6LcwehQqAAAAANQtCdPk7mGvPhvBl2zCvXQnG82I"
                                onChange={handleCaptchaChange}
                              />
                            </Col>
                          </Row>
                          <div className="d-flex justify-content-end">
                            <Button type="submit" className="text-end">
                              Submit
                            </Button>
                          </div>
                        </Form>
                        <p className="ajax-response"></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 ">
                  <div className="tp-footer-top-right flex-column d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
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
              </div>
              <div className="tp-footer-top-right-copyright">
                <p>
                  <EditPencil
                    id={30}
                    existing={data[30]?.display_content}
                    content_type={"txt"}
                  >
                    {data[30]?.display_content}
                  </EditPencil>
                </p>
              </div>
              <div className="tp-footer-top-right-copyright">
                <p>
                  <span style={{ color: "#ff6900", cursor: "pointer" }}>
                    Terms & Conditions
                  </span>
                  {" | "}PATENT PENDING
                  <EditPencil
                    id={31}
                    existing={data[31]?.display_content}
                    content_type={"txt"}
                  >
                    {data[31]?.display_content}
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

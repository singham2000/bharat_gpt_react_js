import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ReCAPTCHA from "react-google-recaptcha";
import { Country } from "country-state-city";
import axiosInstance from "../utils/axios";
const ModalService = ({ showModal, handleCloseModal, selectedId }) => {
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

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountry = Country.getAllCountries();
    setCountries(getCountry);
  }, []);
  return (
    <div
      className={`modal fade mt-10 overflow-scroll ${showModal ? "show" : ""}`}
      id="exampleModalCenter1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      style={{ display: showModal ? "block" : "none", paddingRight: "5px" }}
      aria-hidden={showModal ? false : true}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{ padding: "25px 30px" }}>
            <h3
              className="tp-section-title"
              style={{ fontSize: "26px", marginBottom: "0px" }}
            >
              REACH<span className="title-color"> US </span>
            </h3>
            <button
              type="button"
              className="close"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="tp-contact-form">
            <p>
              <i> Required fields are marked *</i>
            </p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
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
                <Form.Group as={Col} md="6" controlId="validationCustom02">
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
                <Form.Group as={Col} md="6" controlId="validationCustom03">
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
                      <option key={country.isoCode} value={country.name}>
                        {country.phonecode} {country.name}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please select a country.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Control
                    required
                    name="number"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your phone number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom05">
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
                    <option value="" selected={selectedId === 0 ? true : false}>
                      What Service Do You want?
                    </option>

                    <option
                      value="Support"
                      selected={selectedId === 1 ? true : false}
                    >
                      Support
                    </option>
                    <option
                      value="Hire an expert"
                      selected={selectedId === 2 ? true : false}
                    >
                      Hire an expert
                    </option>
                    <option
                      value="Learn and share"
                      selected={selectedId === 3 ? true : false}
                    >
                      Learn and share
                    </option>
                    <option
                      value="Other"
                      selected={selectedId === 4 ? true : false}
                    >
                      Other
                    </option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please select an option.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom06">
                  <Form.Control
                    as="textarea"
                    name="query"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your query.
                  </Form.Control.Feedback>
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
  );
};

export default ModalService;

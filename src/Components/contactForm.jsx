import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Country } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
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
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Control required type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              placeholder="Enter your email id"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Control as="select" required>
              <option value="">Select a country...</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.phonecode} {country.name.split("+")[0]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Control
              required
              type="text"
              placeholder="Enter your number"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Control as="select" required>
              <option value="">What describes you best?</option>

              <option value="developer">Developer</option>
              <option value="enterprise">Enterprise</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom02">
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ContactForm;

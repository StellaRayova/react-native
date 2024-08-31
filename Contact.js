import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contactus.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    feedback: "",
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const disposableDomains = [
    "mailinator.com",
    "guerrillamail.com",
    "10minutemail.com",
    // Add more domains as needed
  ];

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...errors };

    // Name Validation
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(formData.name.trim())) {
      newErrors.name = "Name should not contain numbers or special characters.";
      valid = false;
    } else {
      newErrors.name = "";
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/;
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Please enter an email address from gmail.com, outlook.com, or yahoo.com";
      valid = false;
    } else if (disposableDomains.some(domain => formData.email.endsWith(domain))) {
      newErrors.email = "Please provide a valid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Mobile Validation
    if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Mobile number must be 10 digits";
      valid = false;
    } else {
      newErrors.mobile = "";
    }

    // Company Name Validation
    if (formData.company.trim() === "") {
      newErrors.company = "Company name is required";
      valid = false;
    } else {
      newErrors.company = "";
    }

    // Feedback Validation
    if (formData.feedback.trim() === "") {
      newErrors.feedback = "Your message cannot be empty.";
      valid = false;
    } else {
      newErrors.feedback = "";
    }

    setErrors(newErrors);

    if (valid) {
      // Logging formData to debug
      console.log("Form Data:", formData);

      emailjs.sendForm(
        "service_zi8xtlb",
        "template_ayucl6i",
        form.current,
        "UpSr0sdz75bSvFIZq"
      ).then(
        () => {
          setSubmissionSuccess(true);
          setFormData({
            name: "",
            email: "",
            mobile: "",
            company: "",
            feedback: "",
          });
          // Logging successful submission
          console.log("Email sent successfully!");
        },
        (error) => {
          console.error('Email sending failed...', error.text);
        }
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Handling change for ${name}: ${value}`);
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="body">
      <div className="contact-section media1">
        <div className="overlayru">
          <h1 className="h1ru" style={{ fontFamily: 'Franklin Gothic Medium' }}>
            Contact Us
          </h1>
        </div>
      </div>
      <br />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="cardru cbru">
              <div className="card-body">
                <form ref={form} onSubmit={handleSubmit}>
                  <h2 className="text-center mb-4" style={{ fontFamily: 'Franklin Gothic Medium' }}>Get in Touch</h2>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.name}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Mobile Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                      placeholder="Mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.mobile}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Company Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.company ? "is-invalid" : ""}`}
                      placeholder="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.company}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label uni">
                      Your message<span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${errors.feedback ? "is-invalid" : ""}`}
                      rows="3"
                      placeholder="Please enter your message"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                    ></textarea>
                    <div className="invalid-feedback">{errors.feedback}</div>
                  </div>
                  <div className="text-center" style={{ display: "grid" }}>
                    <button type="submit" className="btn btn-darkuni">
                      Submit
                    </button>
                  </div>
                  {submissionSuccess && (
                    <div className="alert alert-success mt-3">
                      Submission successful!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center rrr">
              <h6 style={{ marginBottom: '20px', marginTop: '15px', fontFamily: 'Franklin Gothic Medium' }}>Let's Talk!</h6>
              <h5 style={{ fontFamily: 'Franklin Gothic Medium', marginBottom: '30px' }}>
                Reach Out to Our Team of Seasoned Experts for Tailored Guidance
              </h5>
              <div>
                <h6 style={{ marginBottom: '-10px', fontFamily: 'Franklin Gothic Medium' }}>Email</h6>
                <p
                  className="btn m-2 btn-dark" style={{ fontSize: '16px', fontFamily: 'Franklin Gothic Medium' }}
                >
                  info@enormousit.com
                </p>
              </div>
              <div>
                <h6 style={{ marginBottom: '-12px', fontSize: '22px', fontFamily: 'Franklin Gothic Medium' }}>Call Us</h6>
                <p
                  className="btn m-2 btn-dark" style={{ fontSize: '18px' }}
                >
                  +91-40-4855 3545
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="locat mt-5">
        <div className="row">
          <div className="col-md-3 text-center">
            <div className="location-iconru"></div>
            <h4>Hyderabad</h4>
            <p style={{ fontSize: '22px' }}>
              Address: # Quadrant 2, 6th Floor, Cyber Towers, HITEC City,
              Madhapur, Hyderabad - 500081 Place: Telangana, India Ph:
              +91-40-4855 3545
            </p>
          </div>
          <div className="col-md-3 text-center">
            <div className="location-iconru"></div>
            <h4>Bangalore</h4>
            <p style={{ fontSize: '22px' }}>
              Address: RMZ Infinity #3, Benningana Halli Place:
              Bengaluru-560016, Karnataka, India Ph: +91-805-028-0642
            </p>
          </div>
          <div className="col-md-3 text-center">
            <div className="location-iconru"></div>
            <h4>USA</h4>
            <p style={{ fontSize: '22px' }}>
              Address: 500 W Overland Ave, Suite 250 E Place: Elpaso, TX 79901
              Ph: +1-915-216-2082
            </p>
          </div>
          <div className="col-md-3 text-center">
            <div className="location-iconru"></div>
            <h4>South Africa</h4>
            <p style={{ fontSize: '22px' }}>
              Address: 96B Sovereign Drive, Route 21 Corporate Park, Nellmapius
              Drive, Irene X30, Centurion, Gauteng, Place: Pretoria, South
              Africa Ph: +27-10-312-5530
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

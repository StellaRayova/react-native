import React, { useEffect, useState } from "react";
import Hands from '../images/Hands.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";
import mission from "../images/aboutFF.jpeg";
import circleup from "../images/uparrow.svg";
import "./Aboutus.css";


function Aboutus() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 100) { // Change 100 to the scroll position you prefer
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScroll = () => {
  //   const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //   const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  //   setScrollTop((scrollTop / scrollHeight) * 100);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div style={{ backgroundColor: 'rgb(227, 227, 228)' }}>
      <div className="contact-section media1">
        <div className="overlay">
          <h1 className="he1 he12 ahead">About Us</h1>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="p-4">
              <p className="Lead">
                Welcome to Enormous IT, where innovation meets excellence.
                Headquartered in Hyderabad, India, with additional offices in
                Bangalore, Singapore, and the US, we are a leading provider of
                advanced IT solutions and services.
              </p>
              <p className="Lead">
                We specialize in a wide range of services including
                infrastructure management, and comprehensive staffing solutions.
                Our expertise spans various domains, from IT and non-IT fields
                like finance, banking, human resources, marketing, and more. We
                take pride in our commitment to delivering quality, customized
                solutions that meet the unique needs of our clients.
              </p>
              <div className="text-center mt-4">
                <button className="btn btn-primary ml-2">Get in Touch</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid rounded" src={Hands} alt="Hands" />
          </div>
        </div>
      </div>

      <div className="container mt-5" id="vision">
        <div className="row">
          <div className="col-md-6 car">
            <div className="cardc bg-primary text-white text-center py-5">
              <div className="cardc-body">
                <h2 className="cardc-title he1 ccc text-white">Vision</h2>
                <p className="cardc-text ccc text-white">
                  To be a globally recognized leader in IT services, known for
                  delivering transformative web and software solutions that
                  drive business success and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cardc bg-primary text-white text-center py-5 ion" >
              <div className="cardc-body">
                <h2 className="cardc-title he1 ccc text-white">Mission</h2>
                <p className="cardc-text ccc text-white">
                  Enormous IT is dedicated to providing cutting-edge business
                  and technology solutions to Fortune 500 companies and beyond.
                  We strive to empower our clients with innovative, scalable,
                  and secure IT solutions that optimize operations, enhance
                  productivity, and foster growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="our whit he1">Our Core Values</h2>
            <div className="list-group whitee">
              <div className="list-group-item list-group-item-action ccc">
                <p className="mb-1 font font1 text-white">Innovation</p>
                <p className="mb-1 font text-white">
                  At Enormous IT, innovation drives our mission to stay ahead
                  in a dynamic market. We are committed to exploring and
                  integrating the latest technologies and creative ideas to
                  provide cutting-edge solutions.
                </p>
              </div>
              <br />
              <div className="list-group-item list-group-item-action ccc">
                <p className="mb-1 font font1 text-white">Quality</p>
                <p className="mb-1 font text-white">
                  Quality is a fundamental principle at Enormous IT. We are
                  dedicated to delivering excellence in every project and
                  service through rigorous quality assurance processes and
                  attention to detail.
                </p>
              </div>
              <br />
              <div className="list-group-item list-group-item-action ccc">
                <p className="mb-1 font font1 text-white">Customer-Centricity</p>
                <p className="mb-1 font text-white">
                  Customer-centricity is at the heart of everything we do at
                  Enormous IT. We prioritize understanding and addressing our
                  client's specific needs through personalized and responsive
                  service.
                </p>
              </div>
              <br />
              <div className="list-group-item list-group-item-action ccc">
                <p className="mb-1 font font1 text-white">Integrity</p>
                <p className="mb-1 font text-white">
                  Integrity is the cornerstone of our operations at Enormous
                  IT. We uphold the highest ethical standards, ensuring
                  transparency, honesty, and fairness in all our interactions.
                </p>
              </div>
              <br />
              <div className="list-group-item list-group-item-action ccc">
                <p className="mb-1 font font1 text-white">Collaboration</p>
                <p className="mb-1 font text-white">
                  Collaboration is essential to our success at Enormous IT. We
                  cultivate a culture of teamwork and mutual respect, valuing
                  diverse perspectives and contributions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 paddi">
            <img className="img-fluid" src={mission} alt="Mission" />
          </div>
        </div>
      </div>

      <div className="container mt-5" id="our-team">
        <div className="row">
          <div className="col-md-6">
            <div className="cardc p-4 abc">
              <p className="font1 font foo he1">Our Team</p>
              <p className="font">
                At Enormous IT, we are proud of our diverse team of industry
                experts and technologists. Each member brings unique
                perspectives and deep domain knowledge, honed through years of
                experience in agency, corporate, and private sectors. Meet our
                leadership team who guides our strategic vision and operational
                excellence.
              </p>
            </div>
          </div>
          <div className="col-md-6 yoo" id="global presence">
            <div className="cardc p-4 glo abc">
              <p className="font1 font foo he1">Global Presence</p>
              <p className="font">
                Headquartered in Hyderabad, India, Enormous IT has expanded its
                footprint with offices in Bangalore, Singapore, and the United
                States. Our presence in the Asia-Pacific region enables us to
                serve clients globally, ensuring localized expertise and
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
      {isVisible && (
        <img 
          src={circleup} 
          alt="Scroll to Top" 
          onClick={scrollToTop} 
          className="scroll-icon upc-arrowc"
        />
      )}
      {/* <div
        className="scroll-icon"
        onClick={scrollToTop}
        style={{ "--scroll": `${scrollTop}%` }}
      >
        <img src={circleup} alt="Scroll to top" />
      </div> */}
      </div>
    </div>
  );
}

export default Aboutus;
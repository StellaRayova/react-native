import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';

// Images
import Mainpage1 from '../images/Mainpage1.jpg';
import Handshake from '../images/Handshake.jpeg';
import team from '../images/StockCake-Teamwork in Action_1720081829.jpg';

// Client images
import vmwarelogo from '../images/vmware.png';
import oracle from '../images/Oracle.png';
import mojio from '../images/mojio.png';
import linkedin from '../images/linkedin.png';
import sherweb from '../images/sherweb.png';
import kfintech from '../images/kfintech.png';
import airbnb from '../images/airbnb.png';
import drdo from '../images/drdo_rci.png';
import bfil from '../images/bfil.png';
import goodyear from '../images/goodyear.png';
import hunterdouglas from '../images/hunterdouglas.png';
import stagwell from '../images/stagwell.png';
import otsuka from '../images/otsuka.png';
import rbl from '../images/rbl_finserve.png';
import tcil from '../images/tcil.png';

export default function Home() {
  const [flipped, setFlipped] = useState(null);

  const handleClick = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  const cardsData = [
    {
      frontText: 'Oracle Services',
      backText:
        'Enormous IT leverages extensive Oracle project experience to deliver innovative and scalable solutions. Our skilled consultants provide cost-effective application implementations, upgrades, support, and integration strategies, ensuring results-driven outcomes.',
      link:'/oracle-services'
    },
    {
      frontText: 'Microsoft Services',
      backText:
        'Enormous IT offers comprehensive Microsoft consulting services to drive business excellence and value. We specialize in Microsoft Enterprise Architecture, Microsoft Custom Application Development, Microsoft Product Solutions, and Microsoft Business Intelligence.',
      link:'/microsoft-services'
    },
    {
      frontText: 'Web Offerings and Mobile Applications',
      backText:
        'Enormous IT specializes in delivering cutting-edge web design and mobile app solutions. We offer customized web design services at competitive rates, ensuring your website stands out. Our expert team delivers projects on time, utilizing the latest and most advanced techniques to achieve exceptional results.',
      link:'/web-offerings-and-mobile-applications'
    },
    {
      frontText: 'Business Intelligence & Data Warehousing services',
      backText:
        'Enormous IT’s experienced BI consultants and engineers provide tailored solutions using tools from industry leaders like Oracle and SAP. Our team understands your business needs, delivering creative technology solutions for your BI requirements.',
      link:'/business-intelligence-data-warehousing-services'
    },
    {
      frontText: 'Big Data',
      backText:
        'Enormous IT helps you organize and harness Big Data. Our senior consultants implement technologies to manage and analyze your data, enabling predictive insights and faster decision-making. We provide strategic guidance to overcome any Big Data challenges.',
      link:'/big-data'
    },
    {
      frontText: 'Talent as a Service',
      backText:
        'Enormous IT offers skilled personnel to support your application development, maintenance, and management needs. Our experts help you address skill gaps and meet project timelines, working on-site or remotely. Certified in key technologies, our team ensures your staffing needs are met efficiently.',
      link:'/talent-as-a-service'
    },
    {
      frontText: 'Artificial Intelligence',
      backText:
        'Enormous IT provides state-of-the-art AI services, focusing on delivering innovative solutions that streamline business processes and enhance operational efficiency. We help our clients achieve greater accuracy, speed, and scalability, ensuring they stay competitive in a rapidly evolving market.',
      link:'/artifitial-intelligence'
    },
    {
      frontText: 'SAP Technology Services',
      backText:
        'Enormous IT offers expert SAP services designed to maximize the value and efficiency of your SAP investments. By partnering with Enormous IT, businesses can optimize their SAP systems, streamline processes, and drive innovation, achieving improved performance and sustainable growth.',
      link:'/sap-technology-services'
    },
  ];

  return (
    <div>
      <div className='ops'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active timg">
              <img src={team} className="d-block w-100 timg" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={Handshake} className="d-block w-100 timg" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={Mainpage1} className="d-block w-100 timg" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Overlay text and button */}
        <div className="carousel-caption">
          <p className="heading">We are Enormous.</p>
          <p className="gate">Your Gateway to Future-Ready Solutions</p>
          <Link to='/contactus' ><button className="cbtn">Get in Touch</button></Link>
        </div>
      </div>

      <div className='dflex fd'>
        <p className='ep'>Enormous IT Pvt. Ltd.</p>
        <p className='epp'>Driving global innovation with cutting-edge solutions.
          Based in Hyderabad and with offices in Bangalore, Singapore,
          and the US, we provide world-class business and technology solutions
          to Fortune 500 companies through continuous innovation and expertise. We pride ourselves on providing tailored, high-quality
          solutions that cater to the unique needs of each client. We collaborate closely with our clients to deliver innovative and scalable
          solutions that drive business growth and efficiency. Partner with Enormous IT, where challenges are transformed into opportunities
          and aspirations become achievements.</p>
      </div>

      <div>
        <p className='wtp dflex'>What do we offer?</p>
        <div className="cards-wrapper">
          {cardsData.map((data, index) => (
            <div
              key={index}
              className={`card-container ${flipped === index ? 'flipped' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div className="card">
                <div className="front">
                  <p className="card-text">{data.frontText}</p>
                </div>
                <div className="back dire">
                  <p className="card-text">{data.backText}</p>
                  <div className="link-container">
                    <Link to={data.link} className='td'><span className='readtxt td'>Learn More {'>>>'}</span></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className=' wtp dflex clh'>Our Valued clients</p>
        <p className='epp'>We are proud to have earned the trust of these esteemed companies</p>

        <div className='container'>
          <div id="carouselExampleControls" className="carousel slide hey" data-bs-ride="carousel">
            <div className="carousel-inner hey">
              <div className="carousel-item active hey pn">
                <div className="d-flex">
                  <div className="col">
                    <div className="card12">
                      <img src={vmwarelogo} alt='VMware Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={oracle} alt='Oracle Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={mojio} alt='Mojio Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={linkedin} alt='LinkedIn Logo' className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item hey pn">
                <div className="d-flex">
                  <div className="col">
                    <div className="card12">
                      <img src={sherweb} alt='Sherweb Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={kfintech} alt='KFintech Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={airbnb} alt='Airbnb Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={drdo} alt='DRDO Logo' className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item hey pn">
                <div className="d-flex">
                  <div className="col">
                    <div className="card12">
                      <img src={bfil} alt='BFIL Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={goodyear} alt='Goodyear Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={hunterdouglas} alt='Hunter Douglas Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={stagwell} alt='Stagwell Logo' className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item hey pn">
                <div className="d-flex">
                  <div className="col">
                    <div className="card12">
                      <img src={otsuka} alt='Otsuka Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={rbl} alt='RBL Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={tcil} alt='TCIL Logo' className="img-fluid" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card12">
                      <img src={oracle} alt='Oracle Logo' className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

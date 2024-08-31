import React, { useEffect, useState } from 'react';
import HCM from '../Oraclecloudapp/images/erp.jpeg';
import './Hcmo.css';
import { Link } from 'react-router-dom';
import ContactUsPopup from '../Popup';

export default function OracleCloudERP() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    const openPopup = () => {
        setIsPopupOpen(true);
        setSubmitMessage(null); // Reset submit message on popup open
    };

    const closePopup = (message) => {
        setIsPopupOpen(false);
        setSubmitMessage(message); // Set the submit message in Forp
        console.log("Submitted message:", message); // Log the submitted message
    };

    useEffect(() => {
        if (submitMessage) {
            const timer = setTimeout(() => {
                setSubmitMessage(null);
            }, 5000); // Remove message after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [submitMessage]);

    const isSuccessMessage = submitMessage && !submitMessage.includes('Failed');
    console.log("Is success message:", isSuccessMessage); // Log the success message check

    return (
        <div>
            <div>
                <div className="image-container">
                    <img src={HCM} className="img-fluid" alt="Technology" />
                    <div className="overlay"></div>
                    <div className="txt" style={{ textAlign: 'left' }}>
                        <h2 className='text-xl text-xl-left text-left'>Oracle Fusion Cloud ERP</h2>
                        <p className='Hp text-xl-left text-left'>Future-Proof Your Business</p>
                        {/* <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation!</button> */}
                        <div className="d-flex justify-content-center">
                            {!isPopupOpen && (
                                <div className='d-flex justify-content-left'>
                                    <button className="btn btn-outline-light w-auto" onClick={openPopup}>Schedule a Free Consultation!</button>
                                    {submitMessage && (
                                        <div className={`submit-message ${isSuccessMessage ? 'success' : 'error'}`}>
                                            {submitMessage}
                                        </div>
                                    )}
                                </div>
                            )}
                            <ContactUsPopup isOpen={isPopupOpen} onClose={closePopup} />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="ap">At Enormous IT, we specialize in providing comprehensive services for Oracle Fusion Cloud ERP, a robust cloud-based solution designed to streamline and optimize your business operations. Oracle Fusion Cloud ERP integrates essential functions such as finance, human resources, and supply chain into a single, unified platform. This powerful ERP system offers real-time analytics and advanced reporting capabilities, empowering businesses with actionable insights and data-driven decision-making. With its user-friendly interface, enhanced security, and flexible scalability, Oracle Fusion Cloud ERP is tailored to meet the evolving needs of businesses of all sizes. Our expert team ensures seamless implementation, customization, and ongoing support to help you leverage the full potential of Oracle Fusion Cloud ERP and achieve operational excellence.</p>
                </div>
                <p className='k2head'>Key Features</p>
                <div className="row">
                    <div className="k2card">
                        <p className="k2cardhead">Unified Cloud Platform</p>
                        <p className="k2cardtext">Integrates all core business functions, including finance, HR, supply chain, and more, into a single, cohesive cloud platform.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Real-Time Analytics:</p>
                        <p className="k2cardtext">Offers advanced analytics and real-time reporting to provide actionable insights and support data-driven decision-making.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Scalability and Flexibility:</p>
                        <p className="k2cardtext"> Easily adapts to changing business needs with scalable infrastructure and flexible configuration options.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Enhanced Security: </p>
                        <p className="k2cardtext">Ensures robust data security and compliance with industry standards through built-in security features and regular updates.</p>
                    </div>
                    {/* <div className="k2card" style={{marginLeft:'350px', marginRight:'350px'}}>
                        <p className="k2cardhead">User-Friendly Interface: </p>
                        <p className="k2cardtext"> Provides an intuitive and user-friendly interface that simplifies navigation and enhances user experience.</p>
                    </div> */}
                </div>


                {/* <div className="k2center">
                    <img src={HCM2} alt="loading" className="k22img img-fluid" />
                </div> */}
                <div >
                    <p className='k2addi '>Additional Benefits:</p>
                    <ul >
                        <li className='k2ullicolor'><strong>  Improved Efficiency:</strong>Automates routine tasks and processes, reducing manual effort and increasing operational efficiency.</li>
                        <li className='k2ullicolor'><strong>Cost Savings:</strong> Lowers IT costs with a cloud-based infrastructure that eliminates the need for expensive on-premises hardware and maintenance.</li>
                        <li className='k2ullicolor'><strong>Seamless Integration:</strong> Integrates seamlessly with other Oracle applications and third-party systems, ensuring smooth data flow and interoperability.</li>
                        <li className='k2ullicolor'><strong>Continuous Innovation:</strong> Benefits from Oracle’s continuous innovation and regular updates, ensuring access to the latest features and enhancements.</li>
                        <li className='k2ullicolor'><strong>Global Reach:</strong> Supports global operations with multi-currency, multi-language, and multi-entity capabilities, catering to diverse business requirements.</li>
                    </ul>
                </div>
                <div>
                    <p className='k2addi'>Reach Out Today!</p>
                    <p className='k2cardtext k2contacttext'> Ready to transform your business with Oracle Fusion Cloud ERP?
                    <Link to='/contactus' className='tdclkk' >Contact us</Link>{" "}
                      Enormous IT to get started.</p>
                </div>
            </div>
        </div>
    );
}

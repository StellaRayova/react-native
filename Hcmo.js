import React, { useEffect, useState } from 'react';
import HCM from '../Oraclecloudapp/images/OracleHcm.jpeg';
// import HCM2 from '../Oraclecloudapp/images/HCMFin.jpeg'
import './Hcmo.css';
import { Link } from 'react-router-dom';
import ContactUsPopup from '../Popup';

export default function OracleCloudHCM() {
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
                        <h2 className='text-xl text-xl-left text-left'>Oracle Fusion Cloud HCM</h2>
                        <p className='Hp text-xl-left text-left'>Simplify HR Operations</p>
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
                    <p className="ap">Oracle Fusion Cloud HCM (Human Capital Management) offers organizations a robust platform for managing all aspects of HR. From talent acquisition to workforce analytics, this solution empowers HR departments to enhance employee engagement and operational efficiency</p>
                </div>
                <p className='k2head'>Key Features</p>
                <div className="row">
                    <div className="k2card">
                        <p className="k2cardhead">Core HR</p>
                        <p className="k2cardtext">Centralizes employee data and streamlines processes, from onboarding to offboarding, while ensuring compliance with regulations.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Talent Management</p>
                        <p className="k2cardtext">Includes tools for recruitment, performance evaluations, and succession planning to develop a high-performing workforce.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Workforce Analytics</p>
                        <p className="k2cardtext">Provides insights into workforce performance, enabling data-driven HR decision-making.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Mobile Access</p>
                        <p className="k2cardtext">Allows employees and managers to access HR functions anytime, anywhere, increasing engagement and satisfaction.</p>
                    </div>
                </div>
                {/* <div className="k2center">
                    <img src={HCM2} alt="loading" className="k22img img-fluid" />
                </div> */}
                <div>
                    <p className='k2addi '>Additional Benefits:</p>
                        <ul >
                            <li className='k2ullicolor'><strong>Enhanced Employee Experience:</strong>Focus on employee engagement and development leads to higher retention rates.</li>
                            <li className='k2ullicolor'><strong>Efficiency Improvements:</strong>Automates routine HR tasks, freeing HR professionals to focus on strategic initiatives.</li>
                            <li className='k2ullicolor'><strong>Customizable Workflows:</strong> Tailor HR processes to fit organizational needs and culture.</li>
                        </ul>
                </div>
                <div>
                    <p className='k2addi'>Contact Us Today!</p>
                    <p className='k2cardtext k2contacttext'> Enhance your HR capabilities with Oracle Fusion Cloud HCM.
                    <Link to='/contactus' className='tdclkk' >Contact us</Link>{" "}
                      today to learn more!</p>
                </div>


            </div>
        </div>
    );
}

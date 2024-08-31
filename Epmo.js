import React, { useEffect, useState } from 'react';
import HCM from '../Oraclecloudapp/images/epm.jpeg';
import './Hcmo.css';
import { Link } from 'react-router-dom';
import ContactUsPopup from '../Popup';

export default function OracleCloudEPm() {
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
                        <h2 className='text-xl text-xl-left text-left'>Oracle Fusion Cloud EPM</h2>
                        <p className='Hp text-xl-left text-left'>Empower Financial Planning</p>
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
                    <p className="ap">Oracle Fusion Cloud EPM (Enterprise Performance Management) provides organizations with a powerful suite for financial planning, analysis, and reporting. This solution enables businesses to align financial goals with operational strategy for improved performance.</p>
                </div>
                <p className='k2head'>Key Features</p>
                <div className="row">
                    <div className="k2card">
                        <p className="k2cardhead">Financial Planning</p>
                        <p className="k2cardtext">Supports budgeting, forecasting, and financial modeling to enhance financial agility.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Reporting and Analysis</p>
                        <p className="k2cardtext">Real-time analytics and customizable dashboards deliver insights into performance metrics.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Profitability Management</p>
                        <p className="k2cardtext"> Analyzes profitability by product lines, customers, and regions, supporting strategic decision-making.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Compliance Management </p>
                        <p className="k2cardtext">Ensures adherence to regulatory requirements with built-in compliance tools.</p>
                    </div>
                    {/* <div className="k2card" style={{marginLeft:'350px', marginRight:'350px'}}>
                        <p className="k2cardhead">User-Friendly Interface: </p>
                        <p className="k2cardtext"> Provides an intuitive and user-friendly interface that simplifies navigation and enhances user experience.</p>
                    </div> */}
                </div>


                {/* <div className="k2center">
                    <img src={HCM2} alt="loading" className="k22img img-fluid" />
                </div> */}

                <div>
                    <p className='k2addi '>Additional Benefits:</p>
                    <ul >
                        <li className='k2ullicolor'><strong> Strategic Alignment:</strong> Helps align financial strategies with overall business objectives for improved performance.</li>
                        <li className='k2ullicolor'><strong>Risk Mitigation:</strong> Enhances financial oversight, reducing the risk of errors and compliance issues.</li>
                        <li className='k2ullicolor'><strong>User Empowerment:</strong> Intuitive tools empower finance teams to take ownership of financial planning and analysis.</li>
                    </ul>
                </div>
                <div>
                    <p className='k2addi'>Contact Us Today!</p>
                    <p className='k2cardtext k2contacttext'> Elevate your financial management processes with Oracle Fusion Cloud EPM.
                    <Link to='/contactus' className='tdclkk' >Contact us</Link>{" "}
                      today to discuss your needs!</p>
                </div>
            </div>
        </div>
    );
}

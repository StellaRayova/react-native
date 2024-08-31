import React, { useEffect, useState } from 'react';
import HCM from '../Oraclecloudapp/images/EBS.jpeg';
import './Hcmo.css';
import { Link } from 'react-router-dom';
import ContactUsPopup from '../Popup';

export default function OracleCloudEbs() {
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
                        <h2 className='text-xl text-xl-left text-left'>Oracle Fusion Cloud EBS</h2>
                        <p className='Hp text-xl-left text-left'>Achieve Enterprise Excellence</p>

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
                    <p className="ap">Oracle E-Business Suite (EBS) provides an integrated suite of applications designed to manage enterprise-wide business processes. This solution helps organizations enhance efficiency and streamline operations across various functions.</p>
                </div>
                <p className='k2head'>Key Features</p>
                <div className="row">
                    <div className="k2card">
                        <p className="k2cardhead">Integrated Applications</p>
                        <p className="k2cardtext">Covers finance, HR, supply chain, and more, enabling seamless data flow and process efficiency.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Customizability</p>
                        <p className="k2cardtext">Highly configurable to meet specific business needs and industry requirements.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Real-Time Insights</p>
                        <p className="k2cardtext">Provides real-time data access, facilitating quick decision-making and strategic planning.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Robust Security</p>
                        <p className="k2cardtext">Advanced security features protect sensitive information and ensure compliance.</p>
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
                        <li className='k2ullicolor'><strong>Holistic Management:</strong> Manage all business functions from a single platform, reducing complexity and improving visibility.</li>
                        <li className='k2ullicolor'><strong>Long-Term Value:</strong> Proven solutions that support growth and adaptability in changing market conditions.</li>
                        <li className='k2ullicolor'><strong>Community Support:</strong>  Extensive community and resources available for best practices and support.</li>
                    </ul>
                </div>
                <div>
                    <p className='k2addi'>Contact Us Today!</p>
                    <p className='k2cardtext k2contacttext'>Maximize your business potential with Oracle E-Business Suite.
                    <Link to='/contactus' className='tdclkk' >Contact us</Link>{" "}
                     today to learn how we can assist you!</p>
                </div>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import HCM from '../Oraclecloudapp/images/SCM.jpeg';
import './Hcmo.css';
import { Link } from 'react-router-dom';
import ContactUsPopup from '../Popup';

export default function OracleCloudScm() {
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
                        <h2 className='text-xl text-xl-left text-left'>Oracle Fusion Cloud SCM</h2>
                        <p className='Hp text-xl-left text-left'>Supply Chain Excellence</p>
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
                    <p className="ap">Oracle Fusion Cloud SCM (Supply Chain Management) delivers a comprehensive solution to optimize supply chain processes, enabling businesses to respond swiftly to market changes and improve operational efficiency.</p>
                </div>
                <p className='k2head'>Key Features</p>
                <div className="row">
                    <div className="k2card">
                        <p className="k2cardhead">Supply Chain Planning</p>
                        <p className="k2cardtext">Advanced forecasting and demand planning tools that minimize costs and improve service levels.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Inventory Management</p>
                        <p className="k2cardtext">Real-time visibility into inventory helps manage stock levels efficiently.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Supplier Collaboration</p>
                        <p className="k2cardtext"> Improved communication with suppliers fosters stronger relationships and better procurement processes.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Logistics Management</p>
                        <p className="k2cardtext">Integrated logistics solutions enhance delivery efficiency and reduce costs.</p>
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
                                <li className='k2ullicolor'><strong>  Agility in Operations: </strong>Quickly adapt to changes in demand and supply chain disruptions.</li>
                                <li className='k2ullicolor'><strong>Cost Reduction:</strong>Streamlined processes lead to significant cost savings throughout the supply chain.</li>
                                <li className='k2ullicolor'><strong>Enhanced Customer Satisfaction:</strong>  Improved inventory management ensures product availability, enhancing the customer experience.</li>
                            </ul>
                </div>           
                <div>
                    <p className='k2addi'>Partner with Us Today!</p>
                    <p className='k2cardtext k2contacttext'>Transform your supply chain operations with Oracle Fusion Cloud SCM.
                    <Link to='/contactus' className='tdclkk' >Contact us</Link>{" "} today for a personalized consultation!  </p>
                </div>
            </div>
        </div>
    );
}

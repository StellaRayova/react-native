import React, { useEffect, useState } from 'react';
import HCM from '../Oraclecloudapp/images/CX.jpeg';
import './Hcmo.css';
import ContactUsPopup from '../Popup';
import { Link } from 'react-router-dom';

export default function OracleCloudCx() {
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
                        <h2 className='text-xl text-xl-left text-left'>Oracle Fusion Cloud CX</h2>
                        <p className='Hp text-xl-left text-left'>Elevate Customer Experience</p>

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
                    <p className="ap">Oracle Fusion Cloud CX (Customer Experience) empowers organizations to enhance customer interactions through integrated solutions designed for sales, marketing, and customer service. This approach helps businesses deliver exceptional customer experiences.</p>
                </div>
                <p className='k2head'>Key Features</p>
                <div className="row">
                    <div className="k2card">
                        <p className="k2cardhead">Personalized Engagement</p>
                        <p className="k2cardtext">Utilizes data analytics to tailor marketing and sales strategies for individual customers.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Omnichannel Support</p>
                        <p className="k2cardtext">Ensures a seamless experience across various customer touchpoints, including digital and physical interactions.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Customer Insights</p>
                        <p className="k2cardtext">Real-time analytics provide valuable insights into customer behavior and preferences.</p>
                    </div>
                    <div className="k2card">
                        <p className="k2cardhead">Lead Management</p>
                        <p className="k2cardtext">Streamlines lead capture, nurturing, and conversion processes to improve sales effectiveness.</p>
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
                        <li className='k2ullicolor'><strong>Improved Customer Loyalty:</strong> Personalized experiences lead to higher customer satisfaction and loyalty.</li>
                        <li className='k2ullicolor'><strong>Sales Enablement:</strong>Equips sales teams with the tools and insights they need to close deals more effectively.</li>
                        <li className='k2ullicolor'><strong>Data-Driven Decisions: </strong>Leverages customer insights for informed decision-making across marketing and sales strategies.</li>
                    </ul>
                </div>
                <div>
                    <p className='k2addi'>Get in Touch with Us Today!</p>
                    <p className='k2cardtext k2contacttext'>Transform your customer experience with Oracle Fusion Cloud CX.{" "}
                    <Link to='/contactus' className='tdclkk' >Contact us</Link>{" "}
                      today for more information!</p>
                </div>
            </div>
        </div>
    );
}

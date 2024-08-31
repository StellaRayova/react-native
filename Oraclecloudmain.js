import React, { useEffect, useState } from "react";
import '../Oraclecloudapp/Oraclecloudmain.css';
// import mainpg from './mainpg.jpg';

import oraclemainpage from '../Oraclecloudapp/images/OracleCloudMain.jpeg';
import ocSub from '../Oraclecloudapp/images/OCMainsub.jpeg'
import { Link } from "react-router-dom";
import ContactUsPopup from "../Popup";
// import CX from './Images/CX.jpg';
// import EBS from './Images/EBS.jpg';
// import EPM from './Images/EPM.jpg';
// import ERP from './Images/ERP.jpg';
// import HCM from './Images/HCM.jpg';
// import SCM from './Images/SCM.jpg';
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


function OracleCloudmain() {
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
        <div >
            <div className="bg ">
                <div className="body">

                    {/* <div >
                        <div className="txtst">
                            <h2 >Oracle Cloud Applications</h2>
                            <p >Transform & Thrive</p>
                            <div>
                                <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation"</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="image-container">
                        <img src={oraclemainpage} className="img-fluid" alt="Loading" />
                        <div className="overlay"></div>
                        <div className="txt" style={{ textAlign: 'left' }}>
                            <h2 className='text-xl text-xl-left text-left'>Oracle Cloud Applications</h2>
                            <p className='Hp text-xl-left text-left'>Transform & Thrive</p>
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
                </div>

            </div>

            <div className="mars">

                <div>
                    <p className="parastella" style={{color:'black', marginTop:'20px',fontSize:'22px' , fontFamily:'wittgenstein'}}>
                        At Enormous IT, we understand the critical importance of maintaining the performance, security, and availability of your Oracle environments. Our Oracle Managed Services deliver comprehensive support to ensure your Oracle systems run smoothly and efficiently. Whether it's routine maintenance, performance optimization, or troubleshooting complex issues, our certified Oracle professionals provide the highest level of service and expertise. Our services include database administration, application management, and cloud infrastructure support. Leveraging the latest technologies and best practices, we ensure your Oracle environments are up-to-date and operating at peak performance. With 24/7 monitoring and support, any potential issues are promptly addressed, minimizing downtime and maximizing productivity.</p>
                    <p className="parastella" style={{color:'black', marginTop:'20px',fontSize:'22px' , fontFamily:'wittgenstein'}} >
                        Enormous IT's Oracle Managed Services also offer strategic consulting to help you make informed decisions about your Oracle investments. Our experts work closely with you to develop and implement customized strategies that align with your business objectives, driving growth and innovation. By partnering with us, you gain access to extensive knowledge and resources, empowering your organization to achieve its goals with greater efficiency and effectiveness. Trust Enormous IT to manage your Oracle environments with the expertise and dedication that sets us apart, allowing you to focus on driving your business forward with confidence.        </p>
                </div>

                <div className="oimgaj">
                    <img src={ocSub} alt="Loading" />
                </div>
                <div className="padgs" >
                    <div className="display flex">

                        <div className="cardst display dirss">
                            {/* <div>
                                    <img className="cardimgsss display" src={ERP} />
                                </div> */}
                            <div className="fontsz">
                                <p>Oracle Fusion Cloud ERP</p>
                            </div>
                            {/* <Link to="">Learn More</Link>  */}
                            <Link to='/oracle-fusion-cloud-erp' className='tdaj'><span className='readtxtaj tdaj'>Learn More {'>>>'}</span></Link>
                        </div>


                        <div className="cardst display dirss">
                            {/* <div>
                                    <img className="cardimgsss display" src={HCM} />
                                </div> */}
                            <div className="fontsz">
                                <p>Oracle Fusion Cloud HCM</p>
                            </div>
                            {/* <div><Link to="">Learn More</Link> </div> */}
                            <Link to='/oracle-fusion-cloud-hcm' className='tdaj'><span className='readtxtaj tdaj'>Learn More {'>>>'}</span></Link>
                        </div>





                        <div className="cardst display dirss">
                            {/* <div>
                                    <img className="cardimgsss display" src={SCM} />
                                </div> */}
                            <div className="fontsz">
                                <p>Oracle Fusion Cloud SCM</p>
                            </div>
                            {/* <div><Link to="">Learn More</Link> </div> */}
                            <Link to='/oracle-fusion-cloud-scm' className='tdaj'><span className='readtxtaj tdaj'>Learn More {'>>>'}</span></Link>
                        </div>

                    </div>

                    <div className="display flex">

                        <div className="cardst display dirss">
                            {/* <div>
                                    <img className="cardimgsss display" src={EPM} />
                                </div> */}
                            <div className="fontsz">
                                <p>Oracle Fusion Cloud EPM</p>
                            </div>
                            {/* <div><Link to="">Learn More</Link> </div> */}
                            <Link to='/oracle-fusion-cloud-epm' className='tdaj'><span className='readtxtaj tdaj'>Learn More {'>>>'}</span></Link>
                        </div>


                        <div className="cardst display dirss">
                            {/* <div>
                                    <img className="cardimgsss display" src={EBS}/>
                                </div> */}
                            <div className="fontsz">
                                <p>Oracle E-Business Suite (EBS)</p>
                            </div>
                            {/* <div><Link to="">Learn More</Link> </div> */}
                            <Link to='/oracle-e-business-suite' className='tdaj'><span className='readtxtaj tdaj'>Learn More {'>>>'}</span></Link>
                        </div>

                        <div className="cardst display dirss">
                            {/* <div>
                                    <img className="cardimgsss display" src={CX} />
                                </div> */}
                            <div className="fontsz">
                                <p>Oracle Fusion Cloud CX</p>
                            </div>
                            <Link to='/oracle-fusion-cloud-cx' className='tdaj'><span className='readtxtaj tdaj'>Learn More {'>>>'}</span></Link>
                        </div>

                    </div>

                </div>


                <div>
                    <p className="parastella" style={{color:'black', marginTop:'20px',fontSize:'22px' , fontFamily:'wittgenstein'}}>
                    <Link to='/contactus' className='tdclkk' >Contact us</Link>{" "} today to discover how Enormous IT's Oracle Managed Services can optimize and secure your Oracle systems. Let us handle the complexities of Oracle management so you can concentrate on driving your business forward with confidence, knowing your Oracle infrastructure is in expert hands. With our dedicated team and proactive support, you'll experience enhanced performance, reduced downtime, and seamless operations, empowering your organization to achieve its goals more effectively.</p>
                </div>
            </div>



        </div>

    )
}
export default OracleCloudmain;

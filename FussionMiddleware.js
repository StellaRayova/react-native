import React from "react";
import '../AddOrServices/FusionMiddleware.css';
import fusionmain1 from '../AddOrServices/AddOrSimages/fusionmain1.jpg';


function Fusionmiddleware() {
    return (
        <div className="bg " >
            <div className="body">
                {/* <img className="img img-fluid" src={workingpic} /> */}
                <div >
                    <div className="image-container">
                        <img src={fusionmain1} className="img-fluid" alt="Fusion Middleware" style={{ width: "100%" }} />
                        <div className="imgfus-overlay"></div>
                        <div className="txtfusn">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>Fusion Middleware </h2>
                            <p className='Hp text-lg-center text-xl-left text-center'>Middleware for Modern Enterprises</p>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mars1">
                <div className="ffontsz" >
                    <p className="paras" style={{marginTop:'20px'}}>Enormous IT’s Fusion Middleware services are designed to help organizations achieve seamless integration across disparate systems and applications. By leveraging Oracle's powerful middleware solutions, businesses can streamline operations, enhance collaboration, and drive innovation.</p>
                </div>

                <div className="headingssst">
                    <p style={{marginTop:'35px'}}>Key Features</p>
                </div>
                <div>

                    <div className="m1">
                        {/* <img className="sideimgins" style={{ borderRadius: 10 }} src={cloudmigration1} /> */}
                        <div className="ffontsz">
                        <div className="rowst">
                            <div className="cardsfusn">

                                <div>
                                    <li>
                                        <span>	<strong>	Integration Capabilities:  </strong> </span>
                                        <span> Our team specializes in utilizing Oracle Fusion Middleware’s suite of tools, including Oracle Integration Cloud and Oracle Data Integrator, to connect cloud and on-premises applications, ensuring smooth data flow and process automation. </span>
                                    </li>
                                </div>
                            </div>
                            <div className="cardsfusn">
                                <div>
                                    <li>
                                        <span >	<strong>	Business Process Management (BPM):  </strong> </span>
                                        <span> We implement robust BPM solutions to model, automate, and optimize business processes, enabling organizations to respond more quickly to market demands.</span>
                                    </li>
                                </div>
                            </div>
                            </div>
                            <div className="rowst">
                            <div className="cardsfusn">
                                <div>
                                    <li>
                                        <span >	<strong>Application Development:   </strong>  </span>
                                        <span> Utilize Oracle’s Application Development Framework (ADF) to accelerate the development of rich, user-friendly applications that enhance business agility.</span>
                                    </li>
                                </div>
                            </div>
                            <div className="cardsfusn">
                            <div>
                                <li>
                                    <span >	<strong>	Security Management:    </strong>  </span>
                                    <span> Implement comprehensive security measures including identity management and data encryption to safeguard sensitive information while ensuring compliance with regulatory requirements.</span>
                                </li>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="hf">
                    <p >Benefits</p>
                </div>

                <div className="m1">
                    {/* <img className="sideimgins" style={{ borderRadius: 10 }} src={cloudmigration1} /> */}
                    {/* <div className="cardsins"> */}
                        <div className="ffontsz clrbg">
                            <div>
                                <li>
                                    <span>	<strong>		Operational Efficiency :  </strong> </span>
                                    <span> Experience improved efficiency through integrated workflows that reduce manual processes and operational silos. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	<strong>	Faster Deployment:  </strong> </span>
                                    <span> Accelerate the deployment of new applications and integrations, reducing time-to-market for key initiatives. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	<strong> User-Centric Design:   </strong>  </span>
                                    <span>Enhance the user experience with intuitive interfaces and streamlined access to information.</span>
                                </li>
                            </div>
                        </div>
                    {/* </div> */}
                </div>



            </div>


            <div className="disg">
                <div >
                    <p className="headchoose1">Contact Us!</p>
                    <p className="paras " >To explore how our Fusion Middleware services can transform your business operations, contact us at 
                    <a className="decst" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttNjBrlvFNrpCqkXGLHQZmRLFVhvhTvCppQLgQTcZTCsJgrnwgrQkplrkfHZSpvZdNHNb" target="_blank" rel="noopener noreferrer"> info@enormousit.com.</a>
                    Let’s discuss your specific needs and how we can help you achieve your integration goals!</p>
                </div>
            </div>

        </div>

        </div>
    )
}
export default Fusionmiddleware;
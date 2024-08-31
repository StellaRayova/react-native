import React from "react";
import '../AddOrServices/ExaData.css';
import Exadata1 from '../AddOrServices/AddOrSimages/Exadata1.jpg';

function Exadata() {
    return (
        <div className="bg " >
            <div className="body">
                {/* <img className="img img-fluid" src={workingpic} /> */}
                <div >
                    <div className="image-container">
                        <img src={Exadata1} className="img-fluid" alt="EXADATA Administration" style={{ width: "100%" }} />
                        <div className="imge-overlay"></div>
                        <div className="txtsttt">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>EXADATA Administration </h2>
                            <p className='Hp text-lg-center text-xl-left text-center'>Power and Precision in Data</p>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mars1">
                <div className="fontsez">
                    <p className="paras" style={{marginTop:'35px' , paddingLeft:'30px'}}>With Enormous IT’s EXADATA Administration services, you gain access to specialized expertise in managing Oracle EXADATA systems, engineered for the optimal performance of Oracle databases. Our solutions are tailored to enhance database efficiency, reliability, and scalability.</p>
                </div>

                <div className="headingssst">
                    <p style={{marginTop:'35px'}}>Key Features</p>
                </div>
                <div>

                    <div className="m1">
                        <div className="fontsez">
                            {/* <img className="sideimgins" style={{ borderRadius: 10 }} src={cloudmigration1} /> */}
                            <div className="rowst">
                                <div className="cardsexa">
                                    <div>
                                        <li>
                                            <span>	<strong>	Performance Optimization:  </strong> </span>
                                            <span>Our team conducts thorough assessments and tuning of your EXADATA environment to ensure optimal performance under varying workloads.</span>
                                        </li>
                                    </div>
                                </div>
                                <div className="cardsexa">
                                    <div>
                                        <li>
                                            <span >	<strong>	Automated Maintenance:   </strong> </span>
                                            <span>We implement automation for routine maintenance tasks such as patch management and system updates to minimize downtime and operational risks.</span>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="rowst">
                                <div className="cardsexa">
                                    <div>
                                        <li>
                                            <span >	<strong>	Advanced Storage Management:    </strong>  </span>
                                            <span> Utilize EXADATA’s unique storage features, including hybrid columnar compression and smart scanning, to maximize performance and reduce costs.</span>
                                        </li>
                                    </div>
                                </div>
                                <div className="cardsexa">
                                    <div>
                                        <li>
                                            <span >	<strong>	Backup and Recovery Solutions:    </strong>  </span>
                                            <span> Implement robust backup strategies using Oracle’s Data Guard and RMAN to ensure data integrity and rapid recovery in case of failures.</span>
                                        </li>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="headexa">
                        <p >Benefits</p>
                    </div>

                    <div className="m1">
                        {/* <div className="cardsins"> */}
                        <div className="fontsez clrbg">
                            <div>
                                <li>
                                    <span>	<strong>	Enhanced Reliability:   </strong> </span>
                                    <span> Experience high availability and disaster recovery capabilities that protect your critical data assets. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	<strong>	Cost Savings:   </strong> </span>
                                    <span> Reduce operational costs through optimized resource utilization and efficient data management. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	<strong> 	Scalability:  </strong>  </span>
                                    <span>Easily scale your database architecture as your business grows, ensuring performance remains consistent.</span>
                                </li>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* <img className="sideimgins" style={{ borderRadius: 10 }} src={cloudmigration1} /> */}
                    </div>



                </div>


                <div className="disg">
                    <div >
                        <p className="headchoose">Contact Us!</p>
                        <p className="paras"  style={{paddingLeft:'30px'}}>To find out more about how our EXADATA Administration services can benefit your organization, reach out at
                            <a className="decst" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttNjBrlvFNrpCqkXGLHQZmRLFVhvhTvCppQLgQTcZTCsJgrnwgrQkplrkfHZSpvZdNHNb" target="_blank" rel="noopener noreferrer"> info@enormousit.com.</a>
                            Our experts are ready to help you maximize your database performance!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Exadata;
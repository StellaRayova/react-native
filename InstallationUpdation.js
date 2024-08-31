import React from "react";
import '../OracleManagedServices/InstallationUpdation.css';
import install12 from '../OracleManagedServices/Managedimages/install12.jpg';
import installsideimg from '../OracleManagedServices/Managedimages/Installsideimg.jpeg';
import install123 from '../OracleManagedServices/Managedimages/install123.jpg';



function Installation() {
    return (
        <div className="bg " >
            <div className="body">
                {/* <img className="img img-fluid" src={workingpic} /> */}
                <div >
                    <div className="image-container">
                        <img src={install12} className="img-fluid" alt="Database Support Services" style={{ width: "100%" }} />
                        <div className="ins-overlay"></div>
                        <div className="txtins">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>Installation and Upgradation </h2>
                            <p className='Hp text-lg-center text-xl-left text-center'> Future-Proof Your Systems.</p>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mars1">
                <div className="fontins">
                    <p className="paras" style={{marginTop:'20px' , paddingLeft:'20px'}}>At Enormous IT, we provide comprehensive Installation and Upgradation services as part of our Oracle Managed Services. Our expert team ensures that your Oracle environments are set up correctly and updated seamlessly, maximizing performance and minimizing downtime.</p>
                </div>

                <div>
                    <p className="headingssst hdclr ptextste">Our Services</p>
                </div>
                <div>
                    <p className="headingssst p2ste">Oracle Installation Services</p>
                </div>
                <div>

                    <div className="insm1" >
                        <img className="sideimg_ins" src={install123} alt="Oracle Installation Services" />
                        <div className="cardsins">
                            <div className="fontins">
                                <div>
                                    <li>
                                        <span>	<strong>	Assessment and Planning: </strong> </span>
                                        <span> We start with a thorough assessment of your current infrastructure and requirements. Our experts develop a tailored installation plan to align with your business goals. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	<strong>	Installation: </strong> </span>
                                        <span> Our skilled technicians manage the entire installation process, ensuring best practices are followed for optimal configuration of your Oracle databases and applications. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	<strong>Environment Setup:  </strong>  </span>
                                        <span> We configure your environment to meet performance and security standards, including proper networking, storage, and backup configurations.</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="headingssst">
                        <p >Upgradation Services</p>
                    </div>

                    <div className="insm1" >
                        <div className="cardsins">
                            <div className="fontins">
                                <div>
                                    <li>
                                        <span>	<strong>	Version Assessment:  </strong> </span>
                                        <span> We evaluate your current Oracle version and assess the benefits of upgrading to the latest version, considering factors like performance enhancements, new features, and security improvements. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	<strong>Upgrade Planning: </strong> </span>
                                        <span> Our team develops a detailed upgrade strategy, including timelines, resource allocation, and risk mitigation plans. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	<strong>	Execution:  </strong>  </span>
                                        <span> We manage the upgrade process meticulously, minimizing downtime and ensuring that all data is migrated correctly. Our approach includes thorough testing to confirm system integrity post-upgrade.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	<strong>	Post-Upgrade Support:  </strong>  </span>
                                        <span> After the upgrade, we provide support to ensure that your systems are functioning optimally and that your team is fully trained on any new features.</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <img className="sideimg_ins" src={installsideimg} alt="Upgradation Services" />
                    </div>



                </div>


                <div className="disg">
                    <div >
                        <p className="headchoose">Partner with Enormous Today!</p>
                        <p className="paras disg" >Ready to streamline your Oracle installations and upgrades? Partner with Enormous IT for expert Oracle Managed Services that drive performance and reliability. Contact us today to learn how we can support your Oracle infrastructure!</p>
                    </div>
                </div>



            </div>

        </div>
    )
}
export default Installation;
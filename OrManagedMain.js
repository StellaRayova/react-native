import React from "react";
import '../OracleManagedServices/OrManagedMain.css';

// import mainpg from './mainpg.jpg';

// Imgages
import managed1 from '../OracleManagedServices/Managedimages/manged.jpeg';
import database_management from '../OracleManagedServices/Managedimages/OracleDBM.png';
import Datamigration from '../OracleManagedServices/Managedimages/Datamigration.png';
import Oracledba from '../OracleManagedServices/Managedimages/OracleAppsDBA.png';
import Oracleapps from '../OracleManagedServices/Managedimages/Oracle_Remote.png';
import Performancetuning from '../OracleManagedServices/Managedimages/Performancetuning.png';
import DBsupport from '../OracleManagedServices/Managedimages/DBSupportservice.png';
import installation from '../OracleManagedServices/Managedimages/Installation_Updation.png';
 import { Link } from "react-router-dom";


function OracleManagedServices() {
    return (
        <div >
            <div className="bg ">
                <div className="body">
                    {/* <img className="img img-fluid" src={workingpic} /> */}
                    <div >
                        <div className="image-container">
                            <img src={managed1} className="img-fluid" alt="Oracle Cloud Applications" style={{ width: "100%" }} />
                            <div className="img-overlay"></div>
                            <div className="txtst">
                                <h2 className='text-xl text-lg-center text-xl-left text-center'>Oracle Managed Services</h2>
                                <p className='Hp text-lg-center text-xl-left text-center'>Streamline. Secure. Succeed.</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mars">

                    <div>
                        <p className="paras" style={{color:'black', marginTop:'20px',fontSize:'22px' , fontFamily:'wittgenstein',paddingLeft:'10px'}}>
                        At Enormous IT, we understand the critical importance of maintaining the performance, security, and availability of your Oracle environments. Our Oracle Managed Services deliver comprehensive support to ensure your Oracle systems run smoothly and efficiently. Whether it's routine maintenance, performance optimization, or troubleshooting complex issues, our certified Oracle professionals provide the highest level of service and expertise. Our services include database administration, application management, and cloud infrastructure support. Leveraging the latest technologies and best practices, we ensure your Oracle environments are up-to-date and operating at peak performance. With 24/7 monitoring and support, any potential issues are promptly addressed, minimizing downtime and maximizing productivity.</p>
                        <p className="paras" style={{color:'black', marginTop:'20px',fontSize:'22px' , fontFamily:'wittgenstein',paddingLeft:'10px'}}>   Enormous IT's Oracle Managed Services also offer strategic consulting to help you make informed decisions about your Oracle investments. Our experts work closely with you to develop and implement customized strategies that align with your business objectives, driving growth and innovation. By partnering with us, you gain access to extensive knowledge and resources, empowering your organization to achieve its goals with greater efficiency and effectiveness. Trust Enormous IT to manage your Oracle environments with the expertise and dedication that sets us apart, allowing you to focus on driving your business forward with confidence. </p>
                    </div>


                    <div className="padgs" >
                        <div className="display flex">

                            <div className="cardsttt display dirss">
                                <div>
                                    <img className="cardimgsss display" src={database_management} alt="Loading"/>
                                </div>
                                <div className="fontsz">
                                    <p>Oracle Database Management</p>
                                    {/* <Link to = "">Learn more</Link> */}
                                    <Link to='/oracle-database-management' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>


                            <div className="cardsttt display dirss">
                                <div>
                                    <img className="cardimgsss display" src={Datamigration} alt="Loading"/>
                                </div>
                                <div className="fontsz">
                                    <p>Data Migration</p>
                                  {/* <Link to = "">Learn more</Link> */}
                                  <Link to='/data-migration' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>


                            <div className="cardsttt display dirss">
                                <div>
                                    <img className="cardimgsss display" src={Oracledba}  alt="Loading"/>
                                </div>
                                <div className="fontsz">
                                    <p>Oracle DBA & Remote DBA Services</p>
                                  {/* <Link to = "">Learn more</Link> */}
                                  <Link to='/oracle-dba-remote-dba-services' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>

                        </div>

                        <div className="display flex">

                            <div className="cardsttt display dirss">
                                <div>
                                    <img className="cardimgsss display" src={Oracleapps}  alt="Loading"/>
                                </div>
                                <div className="fontsz">
                                    <p>Oracle Apps DBA Services</p>
                                    {/* <Link to = "">Learn more</Link> */}
                                    <Link to='/oracle-apps-dba-services' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>


                            <div className="cardsttt display dirss">
                                <div>
                                    <img className="cardimgsss display" src={Performancetuning}  alt="Loading"/>
                                </div>
                                <div className="fontsz">
                                    <p>Performance Tuning and Optimization</p>
                                    {/* <Link to = "">Learn more</Link> */}
                                    <Link to='/performance-tuning-and-optimization' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>

                            <div className="cardsttt display dirss">
                                <div>
                                    <img className="cardimgsss display" src={DBsupport}  alt="Loading"/>
                                </div>
                                <div className="fontsz">
                                    <p>Database Support Services</p>
                                    {/* <Link to = "">Learn more</Link> */}
                                    <Link to='/database-support-services' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="just">
                        <div className="cardsttt2 display dirss" >
                            <div>
                                <img className="cardimgsss display" src={installation}  alt="Loading"/>
                            </div>
                            <div className="fontsz">
                                <p>Installation and upgradation</p>
                                {/* <Link to = "">Learn more</Link> */}
                                <Link to='/installation-and-upgradation' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                            </div>
                        </div>
                    </div>



                    <div>
                        <p className="paras" style={{color:'black', marginTop:'20px',fontSize:'22px' , fontFamily:'wittgenstein',paddingLeft:'10px'}} >Enormous IT is committed to providing these Oracle Cloud Applications (SaaS) to help your organization achieve its business goals, enhance operational efficiency, and drive innovation.</p>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default OracleManagedServices;
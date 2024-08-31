import React from "react";
import '../AddOrServices/Addosmain.css';

// import mainpg from './mainpg.jpg';
import oraclemainpage from '../AddOrServices/AddOrSimages/oraclemainpage.jpeg';
import FUSION from '../AddOrServices/AddOrSimages/FUSION.jpeg';
import DBAS from '../AddOrServices/AddOrSimages/DBAS.jpeg';
import EXADATA from '../AddOrServices/AddOrSimages/EXADATA.jpeg';
import INTEGRATION from '../AddOrServices/AddOrSimages/INTEGRATION.jpeg';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


function Additionalorcleservicesmain() {
    return (
        <div >
            <div className="bg ">
                <div className="body">
                    {/* <img className="img img-fluid" src={workingpic} /> */}
                    <div >
                        <div className="image-container">
                            <img src={oraclemainpage} className="img-fluid" alt="Additional Oracle Services" style={{ width: "100%" }} />
                            <div className="overlayss"></div>
                            <div className="txtstss">
                                <h2 className='text-xl text-lg-center text-xl-left text-center'>Additional Oracle Services</h2>
                                <p className='Hp text-lg-center text-xl-left text-center'>Unmatched Reliability, Infinite Possibilities</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mars">

                    <div>
                        <p className="parasss" style={{color:'black', marginTop:'20px',fontSize:'22px' , fontFamily:'wittgenstein' , paddingLeft:'20px'}} >
                            At Enormous IT, we extend our expertise beyond traditional Oracle solutions to encompass advanced technologies such as Fusion Middleware, EXADATA Administration, DBAS (Database on Cloud), and Oracle Integration. These specialized services are designed to enhance your IT infrastructure's efficiency, scalability, and performance. Whether you require seamless data integration, optimized database management, or robust middleware solutions, our team of Oracle-certified professionals is dedicated to delivering tailored solutions that meet your unique business needs. We leverage industry best practices and cutting-edge tools to ensure your systems operate at peak performance, enabling you to stay ahead in a competitive market.</p>
                    </div>


                    <div className="padgs" >
                        <div className="display flex">

                            <div className="cdst display dirss">
                                <div>
                                    <img className="cardimgsss display" src={FUSION} alt="Fusion Middleware" />
                                </div>
                                <div className="fontsz">
                                    <p>Fusion Middleware</p>
                                    {/* <Link to = "">Learn more</Link> */}
                                    <Link to='/fusion-middleware' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>


                            <div className="cdst display dirss">
                                <div>
                                    <img className="cardimgsss display" src={EXADATA} alt="EXADATA Adminstration" />
                                </div>
                                <div className="fontsz">
                                    <p>EXADATA Adminstration</p>
                                    {/* <Link to = "">Learn more</Link> */}
                                    <Link to='/exadata-adminstration' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>
                        </div>



                        <div className="display flex">
                            <div className="cdst display dirss">
                                <div>
                                    <img className="cardimgsss display" src={DBAS} alt="DBAS(Database on Cloud)" />
                                </div>
                                <div className="fontsz">
                                    <p>DBAS(Database on Cloud)</p>
                                    {/* <Link to = "">Learn more</Link> */}
                                    <Link to='/bdas-database-on-cloud' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>


                            <div className="cdst display dirss">
                                <div>
                                    <img className="cardimgsss display" src={INTEGRATION} alt="Oracle Integration" />
                                </div>
                                <div className="fontsz">
                                    <p>Oracle Integration</p>
                                    {/* <Link to = "">Learn more</Link> */}
                                    <Link to='/oracle-integration' className='tdste'><span className='readtxtste tdste tarste'>Learn More {'>>>'}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <p className="parass1" style={{color:'black', marginTop:'20px',fontSize:'22px' , fontFamily:'wittgenstein' ,paddingLeft:'20px'}}> Contact us today to discover how Enormous IT's comprehensive Oracle services can empower your organization. With our proven track record and commitment to innovation, we ensure your IT investments drive maximum value and support your growth initiatives effectively. Our personalized approach and dedication to customer satisfaction guarantee seamless integration and optimized performance across all Oracle solutions. Let us partner with you to navigate the complexities of modern IT landscapes and achieve sustainable success in your industry</p>
                </div>
            </div>



        </div>
    )
}
export default Additionalorcleservicesmain;
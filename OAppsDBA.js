import React from "react";
import OracleDBA from "../OracleManagedServices/Managedimages/OracleDBA.jpeg";
import "../OracleManagedServices/OAppsDBA.css";
function OracleAppsDBAServicespage() {
    return (
        <div>
            <div className="div1cardm">
                <div className="image-containerm">
                    <img className="imagem" src={OracleDBA} alt="Loading" />
                    <div className="overlaym"></div>
                    <div className="txtm fontm">
                        <h2 className="text-xlm text-lg-centerm text-xl-leftm text-centerm paddingm">Oracle Apps DBA Services</h2>
                        <p className="Hp text-lg-centerm text-xl-leftm text-centerm ">Efficient Solutions, Exceptional Support. </p>
                        <div className="d-flexm justify-content-center fontm">
                            <button type="button" className="btnm  btnm-outline-lightwm-auto paddingm ">Schedule a Free Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fontm">
                <p>At Enormous IT, our Oracle Apps DBA Services are specifically tailored to support the unique needs of
                    Oracle E-Business Suite environments. We focus on ensuring that your applications run smoothly and efficiently,
                    empowering your business to leverage the full potential of Oracle's powerful enterprise solutions.</p>
            </div>
            <div className="fontm">
                <h3 className="font1m sizem">Key Offerings</h3>
            </div>
            <div className="flexm">
                <div className=" cardm  fsm tcm">
                    <p className="font1m">Application Administration</p>
                    <ul>
                        <li>Dedicated support for managing Oracle E-Business Suite applications, including module configuration, setup, and troubleshooting.</li>
                        <li>Customization and integration of applications to meet specific business requirements and enhance functionality.</li>
                    </ul>
                </div>
                <div className=" card1m  fsm tcm">
                    <p className="font1m ">Performance Optimization</p>
                    <ul>
                        <li> Specialized tuning for Oracle Apps environments to enhance application performance, focusing on SQL query optimization, concurrent request management, and resource utilization.</li>
                        <li>Monitoring application performance metrics to identify bottlenecks and implement corrective actions swiftly.</li>
                    </ul>
                </div>
            </div>
            <div className="flexm">
                <div className=" card1m  fsm tcm padm" >
                    <p className="font1m ">Data Management</p>
                    <ul>
                        <li> Efficient management of application data, including archiving and purging strategies to maintain optimal database performance.</li>
                        <li>Implementation of best practices for data integrity and consistency across Oracle Apps modules.</li>
                    </ul>
                </div>
                <div className=" cardm  fsm tcm padm">
                    <p className="font1m">Patch and Upgrade Management</p>
                    <ul>
                        <li>Comprehensive patch management specifically for Oracle E-Business Suite, ensuring timely application of critical patches and updates.</li>
                        <li>Strategic planning and execution of major version upgrades with minimal disruption, including testing and validation phases.</li>
                    </ul>
                </div>
            </div>
            <div className="flexm">
                <div className=" cardm  fsm tcm padm">
                    <p className="font1m">Security and Compliance</p>
                    <ul>
                        <li>Enhanced security measures tailored for Oracle E-Business Suite applications, including user access management and sensitive data protection.</li>
                        <li>Regular compliance assessments to ensure alignment with industry standards and regulations.</li>
                    </ul>
                </div>
                <div className=" card1m  fsm tcm padm">
                    <p className="font1m ">Custom Reporting and Analytics</p>
                    <ul>
                        <li>Development of custom reports and dashboards to provide insights into key business metrics, leveraging Oracle’s reporting tools.</li>
                        <li>Integration of advanced analytics capabilities to drive data-driven decision-making.</li>
                    </ul>
                </div>
            </div>
            <div className="card2m">
                <div className=" card1m  fsm tcm padm midm">
                    <p className="font1m ">Training and Documentation</p>
                    <ul>
                        <li>Comprehensive training programs for your internal teams on Oracle E-Business Suite best practices and operational procedures.</li>
                        <li>Detailed documentation of configurations, customizations, and processes to support knowledge transfer and ongoing maintenance.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="fontm sizem">Why Choose Enormous?</h2>
            </div>
            <div>
                <li className="fontm">
                    <span >	<strong>	Specialized Expertise: </strong>  </span>
                    <span> Our team comprises experts with specialized knowledge of Oracle E-Business Suite, ensuring high-quality, tailored support.</span>
                </li>
            </div>
            <div className="fontm">
                <li >
                    <span >	<strong>Proactive Management: </strong>  </span>
                    <span> We adopt a proactive approach to application management, minimizing downtime and maximizing efficiency.</span>
                </li>
            </div>
            <div className="fontm">
                <li >
                    <span >	<strong>End-to-End Support:  </strong>  </span>
                    <span> : From initial implementation to ongoing support, we offer comprehensive services, allowing you to focus on your core business goals.</span>
                </li>
            </div>
            <div>
                <p className="fontm sizem"><strong>Partner with Enormous Today!</strong></p>

            </div>
            <div className="fontm">
                Unlock the full potential of your Oracle E-Business Suite by partnering with Enormous IT. Our
                specialized Oracle Apps DBA services ensure your applications run smoothly and efficiently,
                backed by our expert support.  Contact us today to learn how we can optimize your Oracle
                environment and drive your business success!
            </div>

        </div>
    )
}
export default OracleAppsDBAServicespage;
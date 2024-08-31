
import React from 'react';
import '../AddOrServices/OracleIntegration.css';
import int from '../AddOrServices/AddOrSimages/OracleIntegration.jpeg';

export default function OracleIntegration() {
    return (
        <div className="bgRr">
            <div className="bodyRr">
                <div className="image-containerRr">
                    <img src={int} className="img-fluidRr" alt="EXADATA Administration" />
                    <div className="img-overlayRr"></div>
                    <div className="txtstttRr">
                        <h2>Oracle Integration</h2>
                        <p>Power and Precision in Data</p>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-light">Schedule a Free Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mars1Rr">
                <div className="fontszRr">
                    <p className="paraRr">Enormous IT’s Oracle Integration services provide businesses with the tools needed to connect applications, automate workflows, and drive digital transformation. Our solutions enable organizations to synchronize data across systems and improve operational efficiency.</p>
                </div>
                <div className="headingssstRr">
                    <p>Key Features</p>
                </div>
           
                <div className="m1Rr">
                   
                    <div className="cardsexaRr flxRr">
                        <li> <span className='strongrrRr'>Pre-built Connectors:</span>
                        <span className='paraRr'>Access a comprehensive library of pre-built connectors for Oracle and non-Oracle applications, allowing for rapid integration with minimal coding.</span></li>
                    </div>
                    <div className="cardsexaRr flxRr">
                        <li> <span className='strongrrRr'>Workflow Automation:</span>
                         <span className='paraRr'>Design custom workflows that automate business processes, improving efficiency and reducing manual errors.</span></li>
                    </div>
                </div>
                <div className="m1Rr">
                    <div className="cardsexaRr flxRr">
                        <li>  <span className='strongrrRr'>Real-Time Synchronization:</span>
                        <span className='paraRr'>Ensure that data is cocardsexansistently updated across all platforms, enhancing decision-making capabilities.</span></li>
                    </div>
                    <div className="cardsexaRr flxRr">
                        <li><span className='strongrrRr'>Analytics and Monitoring:</span>
                             <span className='paraRr'>Utilize built-in analytics tools to monitor integration performance and gain insights into process efficiency.</span></li>
                    </div>
                </div>
                <div className="headchooseRr">
                    <p>Benefits</p>
                </div>
                <div className="paraRr">
                    <li><strong>Streamlined Processes: </strong>Eliminate inefficiencies through automated workflows that facilitate smooth data movement.</li>
                    <li><strong>Enhanced Collaboration: </strong>Foster collaboration across departments and applications, improving overall organizational agility.</li>
                    <li><strong>Increased Visibility: </strong>Gain real-time visibility into integration performance, enabling timely adjustments and optimizations.</li>
                </div>
                <div >
                    <p className="headchooseRr">Contact Us!</p>
                    <p className="paraRr">To learn more about how our Oracle Integration services can enhance your business operations, please reach out at <a className="decst" href="mailto:info@enormousit.com">info@enormousit.com</a>. Our team is eager to help you achieve your integration goals!</p>
                </div>

           
            </div>
        </div>
    );
}




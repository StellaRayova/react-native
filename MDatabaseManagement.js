
import React from 'react';
import '../OracleManagedServices/MDdbmanagement.css';


import db from '../OracleManagedServices/Managedimages/dbmainr.jpeg';
import RAC from '../OracleManagedServices/Managedimages/Realrac.jpeg';
import advgrd from '../OracleManagedServices/Managedimages/advnced.jpeg';
import patch from '../OracleManagedServices/Managedimages/patchr.jpeg';
import atmnys from '../OracleManagedServices/Managedimages/atnms.jpeg';
import clng from '../OracleManagedServices/Managedimages/cloningr.jpeg';

export default function OracleDatabaseManagement() {
  return (
    <div>
      <div>
        <div className="body">
          <div>
            <div className="image-container">
              <img src={db} className="img-fluid img" alt="Oracle Services" />
              <div className="overlay"></div>
              <div className="txt">
                <h2 className="text-xl text-lg-center text-xl-left text-center">ORACLE DATABASE MANAGEMENT</h2>
                <p className="Hp text-lg-center text-xl-left text-center">Simplified. Secured. Superior.</p>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation!</button>
                </div>
              </div>
            </div>
          </div>

         
          <div className="fontszR1  ">
            <div className="parasR1 " style={{marginTop:'25px'}}>In today's data-driven world, managing databases efficiently and securely is crucial for any business to thrive. Enormous IT provides a comprehensive suite of Oracle Database Management solutions designed to ensure high performance, scalability, and reliability. By leveraging advanced technologies, we enable organizations to optimize their database operations, minimize downtime, and protect critical data. Key components of our Oracle Database Management services include Oracle Autonomous Database Management, Oracle Real Application Clusters (RAC), Advanced Data Guard Management, Patch Management, and Cloning.</div>
          </div>

          

          <div className="headingssR1 cenrR1">
            <p>Oracle Autonomous Database Management</p>
          </div>
          <div className="fontszR1 ">
            <p className="parasR1 ">Enormous IT offers Oracle Autonomous Database Management, which simplifies database operations through automation. By using machine learning and AI, this solution manages routine tasks such as tuning, patching, and updating, reducing the administrative burden on IT teams. The autonomous capabilities ensure optimal performance, enhanced security, and lower operational costs, allowing businesses to focus on strategic initiatives rather than database maintenance.</p>
          </div>
          <div className="content-rowR1 ">
            <img className="sideimgR1" src={atmnys} alt="atmnys" />
            <div className="cardssR1">
              <div className="fontszR1 ">
                <div className="headkeyR1  cenrR1">
                  <p>Key Features </p>
                </div>
                <ul className='mrlft'>
                  <li>
                    <span className="fntwt60R1">Automated Tuning and Optimization:</span>
                    <span>Automatically scales resources up or down based on workload requirements.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Self-Patching and Self-Updating:</span>
                    <span> Ensures cloned databases are consistent with the source database.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Scalability on Demand:</span>
                    <span> VCN includes security lists and network security groups (NSGs) for granular traffic control, along with stateful inspection and firewall rules.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Enhanced Security:</span>
                    <span> Incorporates advanced security measures such as data encryption and threat detection.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          

         

          
<div className="headingssR1 cenrR1">
            <p>Oracle Real Application Clusters (RAC)</p>
          </div>
          <div className="fontszR1">
            <p className="parasR1">Our Oracle Real Application Clusters (RAC) service enhances the availability and scalability of databases by enabling multiple servers to operate as a single system. This clustering technology ensures continuous availability and optimal performance by distributing workloads across multiple nodes. Enormous IT’s expertise in RAC helps organizations achieve high availability and fault tolerance, making it ideal for mission-critical applications that require uninterrupted access to data.</p>
          </div>
        
                <div className="content-rowR1 ">
            <div className="cardssR1">
              <div className="fontszR1">
                <div className="headkeyR1 cenrR1">
                  <p>Key Features </p>
                </div>
                <ul className='mrlft'>
                  <li>
                    <span className="fntwt60R1">High Availability:</span>
                    <span> Minimizes downtime by providing failover capabilities and load balancing.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Scalability:</span>
                    <span> Easily add or remove nodes to adjust to changing workload demands.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Improved Performance:</span>
                    <span> Distributes processing across multiple servers, enhancing overall system performance.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Cost Efficiency:</span>
                    <span> Reduces hardware and software costs by utilizing a shared infrastructure.</span>
                  </li>
                </ul>
              </div>
            </div>
            <img className="sideimgR1" src={RAC} alt="Oracle Real Application Clusters (RAC)" />
          </div>


        

<div className="headingssR1 cenrR1">
            <p>Advanced Data Guard Management</p>
          </div>
          <div className="fontszR1">
            <p className="parasR1">Enormous IT provides Advanced Data Guard Management to ensure data protection and disaster recovery. Oracle Data Guard offers a robust solution for data replication, maintaining standby databases that can take over seamlessly in case of a primary database failure. Our advanced management services include configuring, monitoring, and maintaining Data Guard environments to ensure data integrity and availability, minimizing the risk of data loss and downtime.</p>
          </div>
          <div className="content-rowR1 ">
            <img className="sideimgR1" src={advgrd} alt="advd" />
            <div className="cardssR1">
              <div className="fontszR1 ">
                <div className="headkeyR1  cenrR1">
                  <p>Key Features </p>
                </div>
                <ul>
                  <li>
                    <span className="fntwt60R1">Data Replication:</span>
                    <span> Real-time replication of data to standby databases.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Automatic Failover:</span>
                    <span> Seamlessly switches to standby databases in case of primary database failure.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Data Integrity:</span>
                    <span> Ensures data consistency across primary and standby databases.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Disaster Recovery:</span>
                    <span> Provides a reliable disaster recovery solution with minimal downtime.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="headingssR1 cenrR1">
            <p>Patch Management</p>
          </div>
          <div className="fontszR1">
            <p className="parasR1">Effective patch management is essential for maintaining database security and performance. Enormous IT offers comprehensive patch management services for Oracle databases, ensuring that systems are up-to-date with the latest security patches and updates. Our proactive approach includes planning, testing, and deploying patches with minimal disruption to operations, safeguarding databases from vulnerabilities and enhancing overall stability.</p>
          </div>
        
                <div className="content-rowR1 "> 
            <div className="cardssR1">
              <div className="fontszR1">
                <div className="headkeyR1 cenrR1">
                  <p>Key Features </p>
                </div>
                <ul className='mrlft'>
                  <li>
                    <span className="fntwt60R1">Proactive Updates:</span>
                    <span> Regularly applies the latest security patches and updates.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Risk Mitigation:</span>
                    <span> Identifies and addresses vulnerabilities before they can be exploited.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Minimal Disruption:</span>
                    <span> Plans and executes patch deployments with minimal impact on operations.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Compliance:</span>
                    <span> Ensures databases meet regulatory and industry standards.</span>
                  </li>
                </ul>
              </div>
            </div>
            <img className="sideimgR1" src={patch} alt="Oracle Real Application Clusters (RAC)" />
          </div>

          <div className="headingssR1 cenrR1">
            <p>Cloning</p>
          </div>
          <div className="fontszR1">
            <p className="parasR1">Database cloning is a critical process for creating copies of databases for testing, development, and backup purposes. Enormous IT offers Oracle Database Cloning services to streamline this process, providing fast and reliable database clones. Our cloning services enable businesses to create consistent and isolated environments for testing and development, ensuring that changes can be made without affecting production systems.</p>
          </div>
          <div className="content-rowR1 ">
            <img className="sideimgR1" src={clng} alt="Cloning" />
            <div className="cardssR1">
              <div className="fontszR1 ">
                <div className="headkeyR1  cenrR1">
                  <p>Key Features </p>
                </div>
                <ul className='mrlft'>
                  <li>
                    <span className="fntwt60R1">Accurate Replication:</span>
                    <span> Creates exact copies of production databases.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Efficient Testing and Development:</span>
                    <span> Provides reliable environments for testing and development.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Backup Strategy:</span>
                    <span> Supports robust backup and recovery plans.</span>
                  </li>
                  <li>
                    <span className="fntwt60R1">Time and Cost Savings:</span>
                    <span>Reduces the time and resources required for creating and maintaining test environments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fontszR1">
            <p className="parasR1">At Enormous IT, we are committed to delivering top-tier Oracle Database Management services that empower
               organizations to achieve their business goals. With our expertise in Oracle Autonomous Database Management, Oracle Real Application 
               Clusters (RAC), Advanced Data Guard Management, Patch Management, and Cloning, we provide comprehensive solutions that enhance 
               performance, ensure high availability, and safeguard critical data. </p>
          </div>

          <div className="headingssR1 cenrR1">
            <p>Partner with Enormous IT!</p>
          </div>
          <div className="fontszR1">

  
            <p className="parasR1 cenrR1">  Contact us  <span className='mrlftcnts'>to optimize your database operations and drive your business
               forward with confidence.</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}



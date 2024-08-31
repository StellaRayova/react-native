import React from "react";
import '../AddOrServices/DatabaseCloud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Odboc from '../AddOrServices/AddOrSimages/DatabaseonCloud.jpeg';



const DatabaseonCloud= () => {
return (
           <div className="ca1p">
             <div>
                <div>
                  <div className="Ai-cardp card">
                        <div className="image-containerp position-relative">
                            <img src={Odboc} className="img-fluidpz" alt="Technology" />
                            <div className="overlayp position-absolutep w-100 h-100 d-flex flex-column justify-content-center ">
                                <div className="txt text-center hf">
                                    <h2>Database on Cloud</h2>
                                    <p> Revolutionize Your Data Strategy.</p>
                                    <button type="button" className="btn btn-outline-lightp btntxtsz">Schedule a Free Consultation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div className="textz1">
                        <p>Enormous IT offers comprehensive Database on Cloud (DBAS) services, allowing businesses to leverage cloud-based database solutions that provide flexibility, scalability, and enhanced performance. Our solutions are designed to meet the demands of modern enterprise data management.</p>
                    </div>

                    <div className="tcz">
                        <h2>Key Features</h2>
                    </div>

                    <div className="textz">
                        <div className="cdsz ">
                            <div className="cardsz marz ">
                    <h2>Scalability</h2>
                        <p> Easily scale your database resources to accommodate growth, with the ability to dynamically adjust based on workload demands.</p>
                            </div>
                            <div className="cardsz">
                    <h2>Security Protocols</h2>
                        <p> Implement state-of-the-art security measures including encryption, access controls, and compliance management to protect your data in the cloud.</p>
                            </div>
                      </div>

                      <div className="cdsz">
                            <div className="cardsz marz ">
                      <h2>Automated Backups</h2>
                        <p> Schedule automated backups with Oracle Cloud Infrastructure to ensure data safety without manual intervention.</p>
                            </div>

                            <div className="cardsz">
                      <h2>24/7 Monitoring</h2>
                        <p>  Benefit from continuous monitoring and proactive support to address any potential issues before they impact your operations.</p>
                            </div>
                      </div>
                    </div>

                    <div className='tcsz1'>
                        <h2>Benefits</h2>
                    </div>

                    <div className="textz1 padsz">
                        <p><li><b>Cost Efficiency:</b> Lower capital expenditures by eliminating the need for on-premises hardware, while only paying for what you use.</li></p>
                        <p><li><b>Business Agility:</b> Respond rapidly to changing business needs with flexible cloud resources.</li></p>
                        <p><li><b>Focus on Core Business:</b> Free up your IT team to concentrate on strategic initiatives rather than routine database maintenance.</li></p>
                    </div>

                    <div className="tcsz1">
                        <h2 style={{paddingBottom:'10px'}}>Contact Us</h2>
                    </div>
                    <div className="textz1">
                        <p>For more information on how our Database on Cloud solutions can optimize your data management, contact us at  
                            <a className='Ogmst' href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCBkhXVLhdDrQfcPhtZdGskJnSBKsBSnqnbwlNtBSDHSfhTwzGxWzZdbMDpMkPdLVRTklq" target="_blank" rel="noopener noreferrer"> info@enormousit.com.</a> Let’s discuss how we can help you harness the power of the cloud!</p>
                    </div>
      </div>             
   </div>             
</div>
);

};


export default DatabaseonCloud;
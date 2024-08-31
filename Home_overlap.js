import React from 'react';
import '../InPages/Home_overlap.css';
import Business from '../images/Business.png';

const EBusiness = () => {
    return (
        <div className="container">
        <img src={Business} alt="Logo" className="overlapping-image" />
        <div className="content">
          <div className="text-content">
            <p className="pe">Enormous Business</p>
            <p className="ptext">We understand the critical role IT infrastructure and applications play in your business. Therefore, we offer state-of-the-art solutions for managing your servers and applications, addressing resource shortages, and providing continuous, real-time monitoring of your servers, applications, databases, and network.</p>
          </div>
        </div>
      </div>
    );
};

export default EBusiness;

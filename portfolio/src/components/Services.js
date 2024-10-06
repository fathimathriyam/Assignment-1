/*Fathimath Riya Manali Peedikayil*/
/*301419323*/
import React from 'react';
import softwareImage from '../assets/Servicesdeveloper.jpeg'; 
import MaintenanceImage from '../assets/servicesmaintanance.jpeg'; 
import webImage from '../assets/servicesweb.jpeg'; 
import dataImage from '../assets/servicesdata.webp'; 
import '../App.css'; 

function Services() {
  return (
    <div className="services">
      <h1>My Services</h1>
      
      <div className="servicelist">
<div className="service0">
          <div className="flip">
            <div className="flipinnerside">
              <div className="flipfront">
  <img src={softwareImage} alt="Software Development" className="service-image" />
              </div><div className="flipback"><p>Development of software and finding solutions efficiently.</p>
              </div>
            </div>
          </div>
          
        </div>

        
 <div className="service0">
 <div className="flip">
 <div className="flipinnerside">
 <div className="flipfront">
  <img src={MaintenanceImage} alt="Software Maintenance" className="service-image" />
              </div>
              <div className="flipback">
 <p>Maintance to ongoing software with effective and sufficient skill set.</p>
              </div>
            </div>
          </div>
          
        </div>

       
<div className="service0">
 <div className="flip">
  <div className="flipinnerside">
 <div className="flipfront">
  <img src={webImage} alt="Web Development" className="service-image" />
              </div>
              <div className="flipback">
   <p>Creating user freindly and responsive website according to the requirements.</p>
              </div>
            </div>
          </div>
         
        </div>
 <div className="service0">
<div className="flip"><div className="flipinnerside"><div className="flipfront"> <img src={dataImage} alt="Database Design" className="service-image" /> </div>
              <div className="flipback">
                <p>Designing and handling Database systems.</p>  </div>
            </div>
          </div>
          
        </div>

      </div>
      
    </div>
  );
}

export default Services;

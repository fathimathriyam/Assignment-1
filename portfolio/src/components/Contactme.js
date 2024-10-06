/*Fathimath Riya Manali Peedikayil*/
/*301419323*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
var [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });
var navigate = useNavigate(); 

var handleChange = (e) => {
var { name, value } = e.target; setFormData((prevData) => ({...prevData,[name]: value,}));};
var handleSubmit = (e) => {    e.preventDefault(); navigate('/'); };
return (
<div className="contactme">
<h1>Contact Me</h1>
<div className="info">
        
        <p>Email:fathimathriyam629@gmail.com </p>
        <p>Phone: (647) 283-9147</p>
        <p>Location: Scarbrough Golf Club Road</p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div>
 <label htmlFor="firstName">First Name</label>
  <input type="text" id="firstName"name="firstName"value={formData.firstName}onChange={handleChange}required/></div>
  <div><label htmlFor="lastName">Last Name</label>         <input type="text"id="lastName"name="lastName" value={formData.lastName}onChange={handleChange} required
          />
        </div>
        <div><label htmlFor="number">Contact Number</label>
          <input type="tel"id="number"name="number"value={formData.number}onChange={handleChange}
            required
          />
</div>
        <div>
 <label htmlFor="email">Email</label>
              <input  type="email" id="email"
                name="email"value={formData.email}onChange={handleChange}required/></div>
        <div>         <label htmlFor="message">Message</label><textarea id="message"name="message" value={formData.message}
            onChange={handleChange}
            required/></div><button type="submit">Send Message</button></form> </div>);}

export default Contact;

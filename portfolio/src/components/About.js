/*Fathimath Riya Manali Peedikayil*/
/*301419323*/
import React from 'react';
import '../App.css'; 
import resumeriya from '../assets/my-resume.pdf'; 
import profile from '../assets/my-image.jpg'; 

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>Hi, I'm Fathimath Riya Manali Peedikayil, a second-year Software Engineering Technology student at Centennial College. I'm an outspoken individual with big dreams and ambitious goals. I have strong skills in Java, Python, JavaScript, and C#, and I'm an experienced web developer with one year of industry experience. I enjoy working on projects and helping others along the way. Additionally, I'm a strong communicator and a team player, always looking to collaborate and contribute effectively to group efforts.

</p><div className="profile-picture"><img src={profile}alt="Profile Photo"className="img-profile"/>
 </div><a href={resumeriya} target="_blank" rel="noopener noreferrer"><button className="resume-button"> My Resume</button></a> </div>
  );
}

export default About;

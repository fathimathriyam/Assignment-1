/*Fathimath Riya Manali Peedikayil*/
/*301419323*/
import React from 'react';
import todo from '../assets/Todoimage.webp'; 
import samsung from '../assets/webpage2image.jpg'; 
import webtree from '../assets/Webpageimage.webp'; 
import '../App.css'; 

function Project() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="list">
        
        <div className="projectsobjects">
          <img src={todo} alt="to-do list" className="projects-image" />
          <h2>To-Do list Webpage</h2>
          <p>A webpage to create and manage your day-to-day tasks.</p>
          <a href="/To do App/index.html" target="_blank" rel="noopener noreferrer">
            View My Project
          </a>
        </div>

        <div className="projectsobjects">
          <img src={samsung} alt="samsung" className="projects-image" />
          <h2>Website: Samsung S23 Series</h2>
          <p>A platform for users to get information about a particular Samsung product.</p>
          <a href="/ASSIGNMENT 3 WEB - Copy/index.html" target="_blank" rel="noopener noreferrer">
            View My Project
          </a>
        </div>

        <div className="projectsobjects">
          <img src={webtree} alt="Greenary" className="projects-image" />
          <h2>Website: Conservation Areas</h2>
          <p>An informative website about conservation areas.</p>
          <a href="/web assignment 2/assignment2.html" target="_blank" rel="noopener noreferrer">
            View My Project
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Project;

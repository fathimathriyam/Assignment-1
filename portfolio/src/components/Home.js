/*Fathimath Riya Manali Peedikayil*/
/*301419323*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  

function Home() {
  return (
<div className="home">
<h1>Welcome to My Portfolio</h1>
<p>My mission is to navigate the ever-evolving landscape of technology with efficiency and purpose, aiming to harness its potential to build a better society for all</p>
<Link to="/about">
<button className="aboutmebutton">About Me</button>
</Link>
    </div>
  );
}
export default Home;

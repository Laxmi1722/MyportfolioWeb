import "./HeroimgStyles.css";
import React from 'react';
import introimg  from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={introimg } alt="introimg"/>
        </div>
        <div className="content">
            <p>HI,I'M LAXMI</p>
            <h1>  Web Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            
            </div>

        </div>
    </div>
  )
}

export default Heroimg;
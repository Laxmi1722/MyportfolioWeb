
import "./WorkcardStyles.css";
import React from 'react';

import { NavLink } from "react-router-dom";
const Workcard = (props) => {
  return (
  <div className="">
    
    <div className="project-container">
    
        <div className="project-card">
          <img src={props.imgsrc} alt="image " />
          <h2 className="Project-title">{props.title}</h2>
          <div className="pro-details">
            <p>
              {props.text}
            </p>
            <br></br>
            <div className="pro-btns">
              <NavLink to={props.view} className="btn">View</NavLink>
              <NavLink to={props.view} className="btn">source</NavLink>

            </div>
          </div>



        </div>
   </div>
  </div>
    
       
       )
};

        export default Workcard
import "./footerStyles.css"
import React from 'react';
import { FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin,FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4><FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                    
                        84-b,Metro Apartment.
                        Noida

                        
                    </h4>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                    91-9625039129</h4>
                    

                    </div>
                    <div className="email">
                    <h4> <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                    laxmi1722yadav@gmail.com</h4>

                    </div>
                </div>

            </div>
            <div className="right">
                <h4>About me</h4>
                <p>Hi,I am Laxmi.I am a web develper.I build projects using mern stack.I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                <Link to="https://github.com/Laxmi1722"><FaGithub size={30} style={{color:"white",marginRight:"1rem"}}/></Link>
                <Link to="https://twitter.com/home"><FaTwitter size={30} style={{color:"white",marginRight:"1rem"}}/> </Link>              
                <Link to="https://www.linkedin.com/mwlite/in/laxmi-yadav-59543a227"><FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}}/></Link>

                </div>
            </div>

        </div>
    </div>
  )
}

export default footer
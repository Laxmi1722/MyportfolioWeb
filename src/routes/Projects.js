import React from 'react';
import Navbar from "../components/Navbar";

import Footer from "../components/footer";

import Heroimg2 from '../components/Heroimg2';
import Work from '../components/work';


const Projects = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS."   text="some of my recent works"/>
      <Work/>
      <Footer />
    </div>
  )
}

export default Projects
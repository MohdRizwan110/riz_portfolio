import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(() => {
    Aos.init();
    
  }, [])
  return (
    <>
    <div className="container nav_bar"
    data-aos="fade-down"
    data-aos-duration="1000">
        <div className="left nav_items">Portfolio</div>
        <div className="right">
            <a href="#home" className="nav_items">
                Home
                </a>
            <a href="#about" className="nav_items">
                About
                </a>
            <a href="#resume" className="nav_items">
                Resume
                </a>
            <a href="#contact" className="nav_items">
                Contact
                </a>
            {/* <a href="" className="nav_items"></a> */}
        </div>
    </div>
    </>
  )
}

export default Navbar

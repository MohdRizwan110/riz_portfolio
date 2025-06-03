import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";






function Contact() {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration="1000">
        <a href="https://www.instagram.com/mohdrizwan0343" target='blank' className="items">
          <FaInstagram className="icons"/>
        </a>
        <a href='https://www.facebook.com/mohd Rizwan Ansari' target='blank' className="items">
          <CiFacebook className="icons"/>
        </a>
        <a href='https://www.linkedin.com/in/mohd-rizwan-86503b26a' target='blank' className="items">
          <FaLinkedin className="icons"/>
        </a>
        <a href='https://x.com/' target='blank' className="items">
          <FaXTwitter className="icons"/>
        </a>
        <a href='https://github.com/MohdRizwan110' target='blank' className="items">
          <FaGithub className="icons"/>
        </a>
        <a href="mailto:rizwanaliansari72@gmail.com" target="blank" className="items">
        <SiGmail className="icons" />
        </a>

      </div>
    </div>
    </>
  )
}

export default Contact

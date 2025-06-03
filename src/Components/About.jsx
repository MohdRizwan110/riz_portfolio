import React from 'react'
import riz from './riz.png';


function About() {
  return (
    <>
        <div className='abo' id='about'>
      <div className="contan">
        <div className="profile-section">
           <img src={riz} alt="Profile" className="profile-pic" />

          

          
          <div className="details">
            <p><strong>Name:</strong> Mohd Rizwan</p>
            <p><strong>Graduate:</strong> Bachelor of Technology in Computer Science and Engineering (2024)</p>
            <p><strong>Job Role:</strong> Frontend Developer / Web Developer</p>
            <p><strong>Address:</strong> Okhla Vihar, New Delhi</p>
          </div>
        </div>

        <div className="about-section">
          <h1>ABOUT ME</h1>
          <p>
            I recently completed my B.Tech in Computer Science with Artificial Intelligence from IIMT College of Engineering,
            Greater Noida, Uttar Pradesh, affiliated with Dr. A.P.J Abdul Kalam Technical University. During my academic journey,
            I learned technical skills such as Python, Programming, HTML, CSS, JavaScript, jQuery, SQL, ReactJS, etc.
          </p>
          <p><strong>Education:</strong> Bachelor of Engineering</p>
          <p><strong>Languages:</strong> English, Hindi</p>
          <p><strong>Other Skills:</strong> HTML, CSS, JavaScript, Python, SQL, ReactJS, jQuery, Angular, Git & GitHub</p>
          <p><strong>Interests:</strong> Traveling, Playing Cricket, Online Mobile Games</p>
          <a href="https://www.linkedin.com/in/mohd-rizwan-86503b26a" className="linkedin-btn" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About

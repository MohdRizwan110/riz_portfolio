import React from 'react';
import skills from './Data/skills.json';



function Resume() {
  return (
    <><div className="conatiner resume" id='resume'>
      <section id="resume" className="resume-section" >
      <h1 className="resume-m">RESUME</h1>
      <h1 className="resume-bg">RESUME</h1>
      <p className="resume-text">
        As a recent B.Tech graduate in Computer Science and Engineering with Artificial Intelligence, 
        I have knowledge about Python,  Web Development, Frontend and Backend, React , JQuery and SQL. 
        Seeking entry-level opportunities to apply my technical skills and contribute to innovative projects.
      </p>
    </section>

        <section className="education-section">
      <h2 className="education-title">Education</h2>
      <hr className="edu-underline" />
      <div className="education-container">
        <div className="education-card"
          data-aos="flip-left"
          data-aos-duration="1000">
          <h3 className="edu-year">2020–2024</h3>
          <h4 className="edu-degree">Bachelor of Technology</h4>
          <p className="edu-institute">IIMT College of Engineering, Greater Noida</p>
          <p className="edu-description">Computer Science & Engineering - Artificial Intelligence</p>
        </div>
        <div className="education-card"
          data-aos="flip-left"
          data-aos-duration="1000">
          <h3 className="edu-year">2020</h3>
          <h4 className="edu-degree">Higher Secondary</h4>
          <p className="edu-institute">M D S Inter Colege</p>
          <p className="edu-description">Najibabad , Bijnor , Utter Pradesh</p>
        </div>
        <div className="education-card"
          data-aos="flip-left"
          data-aos-duration="1000">
          <h3 className="edu-year">2018</h3>
          <h4 className="edu-degree">High School</h4>
          <p className="edu-institute">Raza Inter College</p>
          <p className="edu-description">Meman Sadat, Bijnor, Utter Pradesh</p>
        </div>
      </div>
    </section>

    <div className="container skills">
      <h1>SKILLS</h1>
      <div className="items">
      {skills.map((data)=>(
        <>
        <div className="item" key={data.id}
                data-aos="flip-left"
        data-aos-duration="1000">
            <img src={`/assect/${data.imageSrc}`} alt="" />
            <h3>{data.title}</h3>
          </div>
        </>
      ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default Resume

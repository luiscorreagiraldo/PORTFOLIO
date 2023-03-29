import React from 'react'
import "./Skills.css"
import Frontend from './Frontend'
import Languages from './Languages'
import Methodologies from './Methodologies'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
   <div className="skills__container container grid">
    <Frontend/>
    <Methodologies/>
    <Languages/>
    {/* softskills */}
   </div>
    </section>
  )
}

export default Skills
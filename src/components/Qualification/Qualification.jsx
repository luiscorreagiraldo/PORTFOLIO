import React from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WEB DESIGN</h3>
                <span className="qualification__subtitle">PLATZI</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WEB DEVELOPMENT</h3>
                <span className="qualification__subtitle">MINTIC</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">FRONTEND DEVELOPMENT</h3>
                <span className="qualification__subtitle">META | COURSERA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>
            </div>

   
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

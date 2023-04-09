import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, settoggleState] = useState(1);

  const toggleTab = (index) => {
    settoggleState(index);
  };

  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active new_button button--flex" : "qualification__button button--flex"}
          onClick={()=> toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active new_button button--flex" : "qualification__button button--flex"}
          onClick={()=> toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">

         {/* for education  */}
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

            {/* 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.E in IT</h3>
                <span className="qualification__subtitle">Gyanmanjari Institute Of Technology</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 2 */}
            <div className="qualification__data">
              <div></div>
              {/* line and dot */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">PWSkills</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present
                </div>
              </div>
            </div>

            {/* 3  */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10<sup>th</sup> & 12<sup>th</sup></h3>
                <span className="qualification__subtitle">Samarpan Vidhyamandir Talaja</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          
          </div>

          {/* for Experience  */}
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            {/* 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT CELL IN COLLEGE</h3>
                <span className="qualification__subtitle">Front-end & Back-end</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  03/03/2023 - 27/05/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 2 */}
            <div className="qualification__data">
              <div></div>
              {/* line and dot */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">-</h3>
                <span className="qualification__subtitle"></span>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification;
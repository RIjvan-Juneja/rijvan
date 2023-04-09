import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle"> 1 Month in College's Developer Section</span>
        </div>

        <div className="about__box">
            <i class='bx bxl-react about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">4 + Projects</span>
        </div>

        <div className="about__box">
            <i class='bx bx-group about__icon'></i>
            <h3 className="about__title">WEB TEAM</h3>
            <span className="about__subtitle">5 + Members</span>
        </div>
    </div>
  )
}

export default info
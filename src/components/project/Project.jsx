import React from 'react';
import "./project.css";

const Project = () => {
  return (
    <section className="project__container container" id="project">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My Latest Work</span>

        <div className="card__container">
            <div className="main__card">
                <div className="project__card">
                    <img src={require('../../assets/gmiu_project.png')} alt="project img" className="project__img" />
                </div>
                <div className="button__container">
                        <a href="https://photos-gmiu.netlify.app/" className="project__button" target="_blank">Images</a>
                        <a href="https://gmiu.edu.in/gmiu/admission/" className="project__button" target="_blank">Demo</a>
                </div>
            </div>

            <div className="main__card">
                <div className="project__card">
                    <img src={require('../../assets/notes_project.png')} alt="project img" className="project__img" />
                </div>
                <div className="button__container">
                        <a href="https://github.com/RIjvan-Juneja/notes-website.git" className="project__button" target="_blank">Code</a>
                        <a href="https://rijvan-notes.netlify.app/" className="project__button" target="_blank">Demo</a>
                </div>
            </div>

            <div className="main__card">
                <div className="project__card">
                    <img src={require('../../assets/BeatsHeadphone_project.png')} alt="project img" className="project__img" />
                </div>
                <div className="button__container">
                        <a href="https://github.com/RIjvan-Juneja/HTML-CSS-Project-6.git" className="project__button" target="_blank">Code</a>
                        <a href="https://rijvan-project6.netlify.app/" className="project__button" target="_blank">Demo</a>
                </div>
            </div>

            <div className="main__card">
                <div className="project__card">
                    <img src={require('../../assets/portfilia2_project.png')} alt="project img" className="project__img" />
                </div>
                <div className="button__container">
                        <a href="#" className="project__button" target="_blank">Code</a>
                        <a href="#" className="project__button" target="_blank">Demo</a>
                </div>
            </div>
            <div className="main__card">
                <div className="project__card">
                    <img src={require('../../assets/portfoliaOld_project.png')} alt="project img" className="project__img" />
                </div>
                <div className="button__container">
                        <a href="https://github.com/RIjvan-Juneja/portfolio.git" className="project__button" target="_blank">Code</a>
                        <a href="https://junejaold.netlify.app/" className="project__button" target="_blank">Demo</a>
                </div>
            </div>
            
        </div>

        
    </section>
  )
}

export default Project;
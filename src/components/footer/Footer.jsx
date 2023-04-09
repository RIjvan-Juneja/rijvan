import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <img src={require('../../assets/Rijvan_logo.png')} alt="" className="footer__title_img" />
            {/* <h1 className="footer__title">Rijvan</h1> */}

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#project" className="footer__link">Project</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                    <a href="https://www.linkedin.com/in/juneja-rijvan-b19a6b205/" className="footer__social-link" target="_blank">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    
                    <a href="https://github.com/RIjvan-Juneja" className="footer__social-link" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.instagram.com/_rijvan_juneja/" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
            </div>

            <span className="footer__copy">&#169; Rijvan, All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer;
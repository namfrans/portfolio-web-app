import React from 'react';
import {NavLink as Link} from 'react-router-dom';

export default function Header() {
    return(
        <div>
            <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>
            <nav id="navbar">
                <div className="max-width">
                    <div className="logo"><Link to="/">Fra<span>ns.</span></Link></div>
                    <div className="menu-items">
                        <li><Link to="/about-me" className="menu-button nav-link">About me</Link></li>
                        <li><Link to="/services-section" className="menu-button nav-link">Services</Link></li>
                        <li><Link to="/skills-section" className="menu-button nav-link">Skills</Link></li>
                        <li><Link to="/projects-section" className="menu-button nav-link">Projects</Link></li>
                        <li><Link to="/team-section" className="menu-button nav-link">Team</Link></li>
                        <li><Link to="/contact-section" className="menu-button nav-link">Contact me</Link></li>
                    </div>
                    <div className="menu-button">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
            <br></br>
        </div>
    )
}
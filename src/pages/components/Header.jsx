import React from 'react';
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    return(
        <div>
            <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>
            <nav id="navbar">
                <div className="max-width">
                    <div className="logo"><Link to="/"><i class="fa-solid fa-terminal fa-beat-fade fa-xs"></i>Fra<span>ns.</span></Link></div>
                    <div className="menu-items">
                        <li><HashLink smooth to="/#about-me" className="menu-button nav-link">About</HashLink></li>
                        <li><HashLink smooth to="/#services-section" className="menu-button nav-link">Services</HashLink></li>
                        <li><HashLink smooth to="/#skills-section" className="menu-button nav-link">Skills</HashLink></li>
                        <li><HashLink smooth to="/#team-section" className="menu-button nav-link">Projects</HashLink></li>
                        {/* <li><HashLink smooth to="/#team-section" className="menu-button nav-link">Team</HashLink></li> */}
                        <li><HashLink smooth to="/#contact-section" className="menu-button nav-link">Contact</HashLink></li>
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
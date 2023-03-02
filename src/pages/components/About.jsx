import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";
import image from './assets/images/banner2.jpg'

export default function About() {
    return (
        <section className="about-me" id="about-me">
            <div className="max-width">
                <h1 className="title">About me</h1>
                <div className="about-content">
                    <div className="column left">
                        <img src={image} alt="TestIMG" id="about-img" />
                    </div>
                    <div className="column right">
                        <div className="text">I'm Frans and I'm a <span className="typing-2"></span></div>
                        <p>I joined web development in middle of last year at my respective University, I enjoyed it and had it as my favourize module of the semester. I like building something out of my imgination, it impreses me so much. I am passionate to work with extremely talented people to gain exeprience, and get awaken about tech.</p>
                        <Router>
                            <Link to="/resume" alt="resume">Access Resume</Link>
                        </Router>
                    </div>
                </div>
            </div>
        </section>
    )
}
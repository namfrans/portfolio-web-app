import React from 'react';
import { Link } from 'react-router-dom';
import image from './assets/images/portfolio_image_gif.gif'

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
                        <p>Enthusiastic, energetic young software specialist skilled in software development with a strong foundation in computer programming, logic, and problem-solving. I work as a Junior Full-Stack engineer, selflessly collaborating with a good team of ambitiouse men. I am eager to learn and have a strong passion for technology.</p>
                        <Link to="https://drive.google.com/file/d/1FONRuy28ZlmCXFIIObvWiOY6T3zIkYox/view?usp=sharing" alt="resume">Access Resume</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from "react";
import { HashLink } from 'react-router-hash-link';

export default function Services() {
    return (
        <section className="services-section" id="services-section">
            <div className="max-width">
                <h1 className="title">My Services</h1>
                <div className="services-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">Data Analysis</div>
                            <p>I understand that decision making is hard process and requires a a bit of certainity. I will assist you in making the right decision based on your study-specific requirements and preferences utilizing trusted Data Analytics and BI products</p>
                        </div>
                        <HashLink smooth to="/#contact-section">Get a qoute</HashLink>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Design</div>
                            <p>I design mobile apps, websites, brand logos and posters with interactive features and anims that peferctly matches the owner&apos;s requirements.</p>
                        </div>
                        <HashLink smooth to="/#contact-section">Get a qoute</HashLink>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Application Development</div>
                            <p>I have capabilities needed to turn an imaginary idea to life through digital technology. I build enterprice level software applications which is either cross platform and native mobile apps, computer systems and responsive web applications.</p>
                        </div>
                        <HashLink smooth to="/#contact-section">Get a qoute</HashLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
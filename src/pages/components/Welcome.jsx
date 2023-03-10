import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";

export default function Welcome() {
    return (
        <section id="welcome-section">
            <div className="max-width">
                <div className="home-content">
                    <div className="text1">Hello, my name is</div>
                    <div className="text2">Frans Nambuli</div>
                    <div className="text3">And I am a <span className="typing"></span></div>
                    <Router>
                        <Link to="/contact-section">Hire me</Link>
                    </Router>
                </div>
            </div>
        </section>
    );
}
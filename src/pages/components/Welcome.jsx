import React from "react";
import { Link } from 'react-router-dom';
import Image from './assets/images/profile_img-removebg-preview.png'

export default function Welcome() {
    return (
        <section id="welcome-section">
            <div className="max-width">
                <div className="home-content">
                    <div className="text1">Hello, my name is</div>
                    <div className="text2">Frans Nambuli</div>
                    <div className="text3">And I am a <span className="typing"></span></div>
                    <Link to={process.env.TELEGRAM_CHANNEL}>Hire me <i class="fa-brands fa-telegram"></i></Link>
                </div>
            </div>
            <div className="shadow-div">
                <div className="home-img">
                    <img src={Image} alt="TestIMG" id="banner-img" />
                </div>
            </div>
        </section>
    );
}
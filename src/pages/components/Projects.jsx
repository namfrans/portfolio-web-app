import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './assets/images/android.png';
import image3 from './assets/images/notepad.png';
import image4 from './assets/images/product_landing.png';
import image5 from './assets/images/survey_form.png';
import image6 from './assets/images/simons_game.png';

export default function Projects() {
    return (
        <section className="team-section" id="team-section">
            <div className="max-width">
                <h1 className="title">My Projects</h1>
                <div className="carousel owl-carousel">
                    <Link to="https://github.com/namfrans/task-manager-app" className="card">
                        <div className="box">
                            <img src={image1} alt="profile 1" style={{width:'auto;', height:'100%'}}/>
                            <div className="text">Task manager app</div>
                            <p>Android task management app utilizing firebase tools as backend. Using the app managers can assign tasks to their workers, promoting accountability among employees and workers can mark completed task then some comment on how the process went. Manager can find a log sheet of completed tasks for the day with an option to download.</p>
                        </div>
                    </Link>
                    <Link to="https://github.com/namfrans/chat-app" className="card">
                        <div className="box">
                            <img src={image1} alt="profile 2" style={{width:'auto;', height:'100%'}}/>
                            <div className="text">Intelligent Chat</div>
                            <p>Easiest way to chat with your buddies. User can easily ask an AI assist the chat responses they don't understand and also get what to reply back.</p>
                        </div>
                    </Link>
                    <Link to="https://github.com/namfrans/notepad-io" className="card">
                        <div className="box">
                            <img src={image3} alt="profile 3" style={{width:'auto;', height:'100%'}}/>
                            <div className="text">Intelligent Notepad</div>
                            <p>Is remote note taking app that allow users to save their notes for later access via the application platform. It's built with MERN Stack tools and users can login with their Google accounts utilizing Google OAuth 2.0 API. <br />NB: It's open source hence users can modify it upto their personal interests.</p>
                        </div>
                    </Link>
                    <Link to="https://github.com/namfrans/responsive-web-design/tree/main/Product-Landing-Page" className="card">
                        <div className="box">
                            <img src={image4} alt="profile 4" style={{width:'auto;', height:'100%'}}/>
                            <div className="text">Game Shop SPA</div>
                            <p>This  a simple HTML CSS and JS gameshop single page app that showcases it&apos;s game products and pricings.</p>
                        </div>
                    </Link>
                    <Link to="https://github.com/namfrans/responsive-web-design/tree/main/Survey-Page/Survey%20form" className="card">
                        <div className="box">
                            <img src={image5} alt="profile 5" style={{width:'auto;', height:'100%'}}/>
                            <div className="text">LUCID Survey form clone</div>
                            <p>HTML CSS short survey form with LUCID motors look and feel, I made this during responsive web design learning process on freecodecamp.</p>
                        </div>
                    </Link>
                    <Link to="https://github.com/namfrans/simons-game" className="card">
                        <div className="box">
                            <img src={image6} alt="profile 5" style={{width:'auto;', height:'100%'}}/>
                            <div className="text">Simons Game</div>
                            <p>A cognitive game that helps improve memory made with Dr.Agela Yu part of my fullsatck web development bootcamp..</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
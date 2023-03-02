import React from 'react';
import image1 from './assets/images/profile1.jpg';
import image2 from './assets/images/profile2.jpg';
import image3 from './assets/images/profile3.jpg';
import image4 from './assets/images/profile4.jpg';
import image5 from './assets/images/profile5.jpg';

export default function Team() {
    return (
        <section className="team-section" id="team-section">
            <div className="max-width">
                <h1 className="title">My Team</h1>
                <div className="carousel owl-carousel">
                    <div className="card">
                        <div className="box">
                            <img src={image1} alt="profile 1" />
                            <div className="text">Name Surname</div>
                            <p>I am an adroind developer, i worked with frans on variouse projects in adroind development. Because of our relentless passion to get the work done, we had over 80% success rate on all of our projects.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src={image2} alt="profile 2" />
                            <div className="text">Name Surname</div>
                            <p>I am an adroind developer, i worked with frans on variouse projects in adroind development. Because of our relentless passion to get the work done, we had over 80% success rate on all of our projects.</p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="box">
                            <img src={image3} alt="profile 3" />
                            <div className="text">Name Surname</div>
                            <p>I am an adroind developer, i worked with frans on variouse projects in adroind development. Because of our relentless passion to get the work done, we had over 80% success rate on all of our projects.</p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="box">
                            <img src={image4} alt="profile 4" />
                            <div className="text">Name Surname</div>
                            <p>I am an adroind developer, i worked with frans on variouse projects in adroind development. Because of our relentless passion to get the work done, we had over 80% success rate on all of our projects.</p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="box">
                            <img src={image5} alt="profile 5" />
                            <div className="text">Name Surname</div>
                            <p>I am an adroind developer, i worked with frans on variouse projects in adroind development. Because of our relentless passion to get the work done, we had over 80% success rate on all of our projects.</p>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
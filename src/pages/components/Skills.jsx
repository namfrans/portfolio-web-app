import React from 'react';
import {Link} from "react-router-dom";

export default function Skills(){
    return(
        <section className="skills-section" id="skills-section">
            <div className="max-width">
                <h1 className="title">My Skills</h1>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My technical skills and exeprience</div>
                        <p>I am proficient in various programming languages such as JavaScript, Java, and Python. I have also gained experience in software development through coursework and personal projects.</p>
                        <Link to="https://github.com/namfrans">Read more</Link>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>MERN Stack</span>
                                <span>80%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Android SDK</span>
                                <span>75%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript ES6</span>
                                <span>80%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Python 3+</span>
                                <span>70%</span>
                            </div>
                            <div className="line python"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Java</span>
                                <span>70%</span>
                            </div>
                            <div className="line java"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>SQL Server</span>
                                <span>85%</span>
                            </div>
                            <div className="line sql"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>C#</span>
                                <span>65%</span>
                            </div>
                            <div className="line asp"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Ballerina</span>
                                <span>65%</span>
                            </div>
                            <div className="line bal"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Kotlin</span>
                                <span>65%</span>
                            </div>
                            <div className="line php"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
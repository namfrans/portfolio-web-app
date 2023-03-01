import React from 'react';
import {NavLink as Link} from 'react-router-dom';

export default function Skills(){
    return(
        <section className="skills-section" id="skills-section">
            <div className="max-width">
                <h1 className="title">My Skills</h1>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My technical skills and exeprience</div>
                        <p>A paragraph taht talks about my technical skills and exeprience</p>
                        <Link to="/read-more-about-me">Read more</Link>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>80%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>60%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Python</span>
                                <span>60%</span>
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
                                <span>75%</span>
                            </div>
                            <div className="line sql"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>ASP.net</span>
                                <span>55%</span>
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
                                <span>PHP</span>
                                <span>80%</span>
                            </div>
                            <div className="line php"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
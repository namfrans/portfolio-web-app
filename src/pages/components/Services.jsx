import React from "react";

export default function Services() {
    return (
        <section className="services-section" id="services-section">
            <div className="max-width">
                <h1 className="title">My Services</h1>
                <div className="services-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">Algorithmic Trading</div>
                            <p>I design websites with interactive features and anims that clearly reflects to the owners roles</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Web Design</div>
                            <p>I design websites with interactive features and anims that clearly reflects to the owners roles</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Software Development</div>
                            <p>I design websites with interactive features and anims that clearly reflects to the owners roles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
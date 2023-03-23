import React, { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("Send");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };
        let response = await fetch("https://namfrans-backend.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Send");
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
        let result = await response.json();
        alert(result.status);
    };
    return (
        <section className="contact-section" id="contact-section">
            <div className="max-width">
                <h1 className="title">Contact me</h1>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get In touch</div>
                        <p>Please reach me by completing the following form</p>
                        <div className="icon">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Frans Nambuli</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Windhoek, Namibia</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">namfrans@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Text Me</div>
                        <form onSubmit={handleSubmit}>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" id="name" placeholder="Name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" id="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message here" required></textarea>
                            </div>
                            <div className="button">
                                <button type="submit">{status}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

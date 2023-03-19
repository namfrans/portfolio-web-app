import React from 'react';
import { Link } from 'react-router-dom'


export default function Header() {
    return(
        <div className="social">
            <Link className="icons" to="https://www.linkedin.com/in/frans-nt-nambuli-6497181a6/">  LinkedIn <i className="fa-brands fa-linkedin"></i></Link>
            <Link className="icons" to="https://twitter.com/FransNambuli">Twitter <i className="fa-brands fa-square-twitter"></i></Link>
            <Link className="icons" to="https://www.reddit.com/user/Code_Spicer">Reddit <i className="fa-brands fa-square-reddit" ></i></Link>
            <Link className="icons" to="https://www.twitch.tv/totlaatfr">Twitch <i className="fa-brands fa-twitch" ></i></Link>
            <Link className="icons" to="https://gitlab.com/namfrans">Gitlab <i class="fa-brands fa-square-gitlab"></i></Link>
        </div>
    )
}
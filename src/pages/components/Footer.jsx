import React from 'react';
import {NavLink as Link} from 'react-router-dom';

export default function Footer(){
    return(
        <footer>
            <span> &copy; 2022 Developer: <Link to="/about-me">Frans Nambuli</Link> |<span> All rights reserved</span></span>
        </footer>
    )
}
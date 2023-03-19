import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Footer(){
    return(
        <footer>
            <span> &copy; 2022 Developer: <HashLink smooth to="/#about-me">Frans Nambuli</HashLink> |<span> All rights reserved</span></span>
        </footer>
    )
}
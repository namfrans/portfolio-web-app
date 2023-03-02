import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <Router>
                <span> &copy; 2022 Developer: <Link to="/about-me">Frans Nambuli</Link> |<span> All rights reserved</span></span>
            </Router>
        </footer>
    )
}
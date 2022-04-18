import React from "react";
import "../../styles/reset.css"
import "../../styles/navbar.css"

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="logo">
                jojo.
            </div>
            <div>
                <ul className="nav-list">
                    <a href="home.com">Home</a>
                    <a href="home.com">About</a>
                    <a href="home.com">Services</a>
                    <a href="home.com">Portfolio</a>
                    <a href="home.com">News</a>
                    <a href="home.com">Contact</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
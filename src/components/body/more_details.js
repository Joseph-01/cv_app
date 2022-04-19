import React from "react";
import "../../styles/more-details.css"


function MoreDetails() {
    return (
        <div className="main-div">
            <div className="about-me">
                <header>About Me</header>
                <ul>
                    <li>Email: softjoe40@gmail.com</li>
                    <li>Phone Number: 07041194180</li>
                    <li></li>
                </ul>
            </div>          
            <hr />
            <div className="education">
                <header>Education</header>
                <ul>
                    <li>Edo College: from 2010 - 2016</li>
                    <li>University Of Benin: from 2016 - current</li>

                </ul>
            </div>
            <hr />
            <div className="experience">
                <header>Experience</header>
                <ul>
                    <li>Streek Softwares: from 2020 - now</li>
                    <li>SideHustle Internship: from 2022 - now</li>
                </ul>
            </div>
        </div>
    )
}

export default MoreDetails
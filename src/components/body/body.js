import React from "react";
import "../../styles/body.css";
// import ProfilePic from "../../files/IMG_20200126_125301_722-removebg-preview.png"
import Button from "../button/button";


function Main() {
    return (
        <main>
            <div className="details">
                <p className="my-name">MY NAME IS JOSEPH ISIBOR</p>
                <p className="creative">I am a creative software developer from Nigeria</p>
                <Button>Conatct Me</Button>
            </div>
        </main>
    )
}

export default Main
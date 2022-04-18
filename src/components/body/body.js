import React from "react";
import "../../styles/body.css";
import ProfilePic from "../../files/IMG_20200126_125301_722-removebg-preview.png"
import Button from "../button/button";


function Main() {
    return (
        <main>
            <div className="details">
                <p className="creative">I am a creative software developer from Nigeria</p>
                <p className="lorem">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel dicta ut doloribus nisi beatae provident 
                </p>
                <Button>Conatct Me</Button>
            </div>
            <div className="profile-pic">
                <img className="picture" src={ProfilePic} alt="My pic" />
            </div>
        </main>
    )
}

export default Main
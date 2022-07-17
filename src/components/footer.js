import React from "react";
import Github from "../images/github.png"
import Linkedin from "../images/linkedin.png"
import Twitter from "../images/twitter.png"

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/AakashRaj20" target="_blank">
                <img src={Github} alt="icon--img" className="icon--img1"/>
            </a>
            <a href="https://www.linkedin.com/in/aakash-raj-a601a9228/"target="_blank">
                <img src={Linkedin} alt="icon--img" className="icon--img2"/>
            </a>
            <a href="https://twitter.com/AakashRaj2003" target="_blank">
                <img src={Twitter} alt="icon--img" className="icon--img3"/>
            </a>
            <h5 className="footer--credit">{`{Developer : Aakash Raj}`}</h5>
        </footer>
    )
}
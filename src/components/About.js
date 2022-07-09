import React from "react";
import "../styles/About.css";
import AboutData from "../data/AboutData";

export default function About(){

    return(
        <div id="#about">
            <span className="app-title">
                {AboutData.data.title}
            </span>
            <p className="about-desc">
                {AboutData.data.desc}
            </p>
            <img className="about-image" src={AboutData.data.image}/>
        </div>
    )
}
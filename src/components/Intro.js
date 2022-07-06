import React from "react"
import Typist from "react-typist"
import "../styles/Intro.css"
import "react-typist/dist/Typist.css";

export default function Intro(){

    return (
        <div id="intro">
            <Typist avgTypingDelay={120}>
                <span className="intro-greeting">
                    {"hi, "}
                        <span className="intro-name">
                            {"Sair"}
                        </span>
                    {" here."}
                </span>
            </Typist>
            <div className="intro-subtitle">
                I create stuff sometimes.
            </div>
            <div className="intro-desc">
                I'm a software engineer based in the Bay Area. I have great
                interest in full-stack development, computer graphics,
                video game development, and everything in between.
            </div>
        </div>
    )
}
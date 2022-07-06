import React from "react"
import Typist from "react-typist"
import "../styles/Intro.css"

export default function Intro(){

    return (
        <div id="intro">
            <Typist avgTypingDelay={120}>
                <span className="intro-title">
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
                interest in full-stack development, artificial intelligence,
                human-computer interactions, and everything in between.
            </div>
        </div>
    )
}
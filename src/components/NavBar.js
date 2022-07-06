import React from "react"
import "../styles/NavBar.css"
import NavBarData from "../data/NavBarData";

export default function NavBar(){

    const links = [
        <a href="#intro">/home</a>,
        <a href="#about">/about</a>,
        <a href="#experience">/experience</a>,
        <a href="#projects">/software-creations</a>
    ]

    const navBarIcons = NavBarData.map(data => {
        return (
            <a href={data.link} target="_blank">
                {data.icon}
            </a>
        )
    })

    return (
        <div className="navbar">
            <div className="navbar-links">
                {links}
            </div>
            <div className="navbar-icons">
                {navBarIcons}
            </div>
        </div>
    )
}
import React from "react"
import "../styles/NavBar.css"
import NavBarData from "../data/NavBarData";

export default function NavBar(){

    const navBarIcons = NavBarData.map(data => {
        return (
            <a href={data.link} target="_blank">
                {data.icon}
            </a>
        )
    })

    return (
        <div className="navbar">



            <div className="navbar-icons">
                {navBarIcons}
            </div>

        </div>
    )
}
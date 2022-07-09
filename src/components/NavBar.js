import React from "react"
import "../styles/NavBar.css"
import NavBarData from "../data/NavBarData"

export default function NavBar(){

    const sectionElements = NavBarData.data.sections.map(item => {
        return (
            <a href={item.link}>
                {item.name}
            </a>
        )
    })

    const iconElements = NavBarData.data.icons.map(item => {
        return (
            <a href={item.link} target="_blank">
                {item.icon}
            </a>
        )
    })

    return (
        <div className="navbar">
            <div className="navbar-links">
                {sectionElements}
            </div>
            <div className="navbar-icons">
                {iconElements}
            </div>
        </div>
    )
}
/*





*/
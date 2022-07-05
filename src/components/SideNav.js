import React from "react"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../App.css"

export default function SideNav(){
    return (
        <div>
            <div className="sidebar-logos" href="/" target="_blank">
                <a href="mailto:sair_abbas@yahoo.com">
                    <EmailRoundedIcon></EmailRoundedIcon>
                </a>
                <a href="https://github.com/sairabbas" target="_blank">
                    <GitHubIcon></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/sairabbas" target="_blank">
                    <LinkedInIcon></LinkedInIcon>
                </a>
            </div>
        </div>
    )
}
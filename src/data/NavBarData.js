import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

export default {
        sections: [
            {
                link: "#intro",
                name: "/home"
            },
            {
                link: "#about",
                name: "/about"
            },
            {
                link: "#experience",
                name: "/experience"
            },
            {
                link: "#projects",
                name: "/software-creations"
            }
        ],
        icons: [
            {
                link: "mailto:sair_abbas@yahoo.com",
                icon: <EmailRoundedIcon fontSize="large"/>
            },
            {
                link: "https://www.linkedin.com/in/sairabbas",
                icon: <LinkedInIcon fontSize="large"/>
            },
            {
                link: "https://github.com/sairabbas",
                icon: <GitHubIcon fontSize="large"/>
            }
        ]
}
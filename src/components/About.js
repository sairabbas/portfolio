import React from "react";
import "../styles/About.css";

class About extends React.Component {

    render() {
        const one = (
            <p>
                I am currently a fourth year <b>Computer Science</b> major at
                <a href="https://www.utoronto.ca/about-u-of-t">
                    {" "}
                    University of Toronto
                </a>
                . After graduation, I will be joining{" "}
                <a href="https://www.aboutamazon.com/">Amazon</a> as a{" "}
                <b>Software Development Engineer</b> while undertaking a part-time
                <b> Master's of Science</b> in <b>Software Engineering </b>at{" "}
                <a href="https://www.ox.ac.uk/about">University of Oxford</a>.
            </p>
        );
        const two = (
            <p>
                Outside of work, I'm interested in following the developments of
                science. I also play a lot of video games. And make TikToks.
            </p>
        );
        const three = (
            <p>
                <b>Want to chat?</b> Shoot me a message at{" "}
                <a href="mailto:gazi.jarin@mail.utoronto.ca">
                    gazi.jarin@mail.utoronto.ca
                </a>{" "}
                and let's talk.
            </p>
        );
        const desc_items = [one, two];

        const tech_stack = [
            "Javascript ES6+",
            "Python",
            "React.js",
            "Java",
            "Node.js",
            "HTML & CSS"
        ];

        const tech_items = tech_stack.map(stack => <li>{stack}</li>);

        return (
            <div id="about">

                    <div className="section-header ">
                        <span className="section-title">/ about me</span>
                    </div>
                    <div className="about-content">
                        <div className="about-description">
                            {[one]}
                            {"Here are some technologies I have been working with:"}
                            <ul className="tech-stack">
                                {tech_stack.map(function (tech_item, i) {
                                    return (

                                            <li>{tech_item}</li>

                                    );
                                })}
                            </ul>
                            {[two]}
                        </div>
                        <div className="about-image">
                            <img src={process.env.PUBLIC_URL + "/images/selfie.jpg"} alt="selfie"/>
                        </div>
                    </div>

            </div>
        );
    }
}

export default About;

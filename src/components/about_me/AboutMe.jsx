import React from "react";
import Skills from "../skills/Skills";

import c from './about_me.module.css';

function AboutMe(props) {
    return (
        <div>
            <h2>About Me</h2>

            <Skills/>
        </div>
    );
};

export default AboutMe;
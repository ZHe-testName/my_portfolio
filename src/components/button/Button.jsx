import React from "react";

import c from './button.module.css';

function Button(props) {
    return (
        <button className={c.button}>
            {props.title}
        </button>
    );
};

export default Button;
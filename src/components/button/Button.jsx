import React from "react";

import c from './button.module.scss';

function Button(props) {
    return (
        <div className={c.button}>
            <button>
                <h3>{props.title}</h3>
            </button>
        </div>
    );
};

export default Button;
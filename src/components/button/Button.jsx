import React from "react";

import c from './button.module.scss';

function Button(props) {

  return (
    <div className={c.button}>
      <button {...props}>
        <h3>{props.title}</h3>

        {
          props.children || null
        }
      </button>
    </div>
  );
};

export default Button;
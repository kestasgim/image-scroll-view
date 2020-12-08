import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button className="button is-danger is-light" type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;

import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button className="button is-danger is-light" type={props.type} onClick={props.handler}>
      {props.text}
    </button>
  );
};

export default Button;

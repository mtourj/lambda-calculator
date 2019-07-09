import React from "react";

const NumberButton = props => {
  return (
    <div className={`number-button ${props.num == 0 ? 'zero' : ''}`}>
      {props.num}
    </div>
  );
};

export default NumberButton;
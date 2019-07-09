import React from "react";

const SpecialButton = props => {
  return (
    <div onClick={() => props.special === 'C' ? props.clear() : null} className='special-button'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </div>
  );
};

export default SpecialButton;
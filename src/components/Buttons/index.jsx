import React from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

export default function Buttons({setValue}) {
    const buttonsPad = [
      ["%", "CE", "C", "<-"],
      ["1/x", "x^2", "✓x", "/"],
      [7, 8, 9, "X"],
      [4, 5, 6, "-"], 
      [1, 2, 3, "+"],
      ["=/-", 0, ".", "result"],
  ];
    
  return (
    <div className="ButtonGroup">
      <div>
      {
        buttonsPad.flat().map((buttons, index) => {
          return (
            <Button variant="secondary"
              name={buttons}
              key={index}
              className={`button button-${buttons} numberPad`}
              onClick={() => setValue(buttons)}
            >{buttons}</Button>
          );})}
      </div>
    </div>
  )
}

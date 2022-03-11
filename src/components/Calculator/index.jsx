import {React, useState} from 'react'
import Buttons from '../Buttons';
import Screen from '../Screen';
import './styles.css';


export default function Calculator({children}) {
  const [value, setValue] = useState("");

  const updateValue = (number) => {
    
    setValue(`${value}${number}`); 
  };

  const clear = (number) => {
    setValue("");
  };

  return (
    <div className="calculator">
      <Screen value={value} />
      <Buttons setValue={updateValue} />
    </div>
  )
}

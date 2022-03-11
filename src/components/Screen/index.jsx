import React from 'react';
import './styles.css';

export default function View({value}) {
  return (
    <div className="view">
      <div className="view-bg">
        <h1>{value}</h1>
      </div> 
    </div>
  )
}

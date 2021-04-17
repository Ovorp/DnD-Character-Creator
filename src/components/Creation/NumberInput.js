import React from 'react';
import './../../css/numberInput.css';

export default function NumberInput(props) {
  return (
    <div className="number">
      <div>
        <h2>{props.name[0].toUpperCase() + props.name.slice(1)}</h2>
        <input
          name={props.name}
          type="number"
          min="0"
          max="20"
          value={props.value}
          onChange={props.handleUpdateUserInput}
          placeholder={0}
        />
      </div>
    </div>
  );
}

import React from 'react';
import './../../css/nameInput.css';

export default function NameInput(props) {
  let title = props.name[0].toUpperCase() + props.name.slice(1);
  title = title.split('N').join(' N');

  return (
    <div>
      <h2>{title}</h2>
      <input
        name={props.name}
        value={props.value}
        onChange={props.handleUpdateUserInput}
        placeholder={title}
      />
    </div>
  );
}

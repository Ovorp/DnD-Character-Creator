import React from 'react';
import './../css/header.css';

export default function Header(props) {
  return (
    <header>
      <h1>{props.header}</h1>
    </header>
  );
}

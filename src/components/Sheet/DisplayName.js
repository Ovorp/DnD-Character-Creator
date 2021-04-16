import React from 'react';

export default function DisplayName(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.name}</p>
    </article>
  );
}

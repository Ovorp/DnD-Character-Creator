import React from 'react';

export default function DisplayAbilityScore(props) {
  return (
    <article key={props.scoreName}>
      <h3>{props.scoreName[0].toUpperCase() + props.scoreName.slice(1)}</h3>
      <p>{props.score}</p>
    </article>
  );
}

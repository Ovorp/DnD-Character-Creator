import React from 'react';
import './../../css/displayAbilityScores.css';
import DisplayMods from './DisplayMods';

export default function DisplayAbilityScore(props) {
  return (
    <article className="skills" key={props.scoreName}>
      <h4 id="skill-name">
        {props.scoreName[0].toUpperCase() + props.scoreName.slice(1)}
      </h4>
      <div className="score-numbers">
        <p>Score:</p> <p> {props.score}</p>
      </div>
      <div className="mod-numbers">
        <p>Modifier: </p>
        <DisplayMods score={props.score} />
      </div>
    </article>
  );
}

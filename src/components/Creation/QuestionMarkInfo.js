import React from 'react';
import './../../css/questionMarkInfo.css';

export default function QuestionMarkInfo(props) {
  return (
    <div>
      <div className="questionMark">?</div>
      <aside id="explain">{props.explain}</aside>
    </div>
  );
}

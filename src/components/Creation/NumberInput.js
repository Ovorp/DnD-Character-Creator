import React from 'react';
import QuestionMarkInfo from './QuestionMarkInfo';
import './../../css/numberInput.css';

export default function NumberInput(props) {
  const skillExplained = [
    'Str or Strength measures bodily power, athletic Training, and the extent to which you can exert raw physical force.',
    'Dex or Dexterity measures agility, reflexes, and balance.',
    'Con or Constitution measures health, stamina, and vital force.',
    'Int or Intelligence measures mental acuity, accuracy of recall, and the ability to reason.',
    'Wis or Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.',
    'Cha or Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.',
  ];

  return (
    <div className="number">
      <div>
        <h2>
          {props.name[0].toUpperCase() + props.name.slice(1)}{' '}
          <QuestionMarkInfo
            explain={skillExplained[props.indexNumberForSkillExplanation]}
          />
        </h2>
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

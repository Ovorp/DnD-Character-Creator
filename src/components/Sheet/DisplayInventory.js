import React from 'react';

export default function DisplayInventory(props) {
  console.log(props.inventory);
  return (
    <article>
      <ul>
        {props.inventory.map((val) => {
          return <li key={val.id}>{val.name}</li>;
        })}
      </ul>
    </article>
  );
}

import React from 'react';

export default function DisplayShop(props) {
  return (
    <article>
      <h3>Theses are the Items left in the shop!</h3>
      <ul>
        {props.shopItems.map((val) => {
          return <li key={val.id}>{val.name}</li>;
        })}
      </ul>
    </article>
  );
}

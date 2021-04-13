import React from 'react';

export default function Avatar(props) {
  return (
    <select name="avatar" onChange={props.handleUpdateUserInput}>
      <option value="test1">test</option>
      <option value="test2">test2</option>
      <option value="test3">test3</option>
    </select>
  );
}

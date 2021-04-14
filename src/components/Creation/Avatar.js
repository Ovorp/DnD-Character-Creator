import React from 'react';

export default function Avatar(props) {
  return (
    <select name="avatar" onChange={props.handleUpdateUserInput}>
      <option value="">Pick an Avatar</option>
      <option value="https://db4sgowjqfwig.cloudfront.net/campaigns/178338/assets/813777/Tortle.png?1514853655">
        Avatar 1
      </option>
      <option value="https://pbs.twimg.com/media/DkVH93jW0AAzXwP.png">
        Avatar 2
      </option>
      <option value="https://pbs.twimg.com/media/DMJbPTJVQAA5u3A.jpg">
        Avatar 3
      </option>
      <option value="https://64.media.tumblr.com/f2626f1bf3721b1753aa8c428c9434e5/tumblr_oiem29UTd11qkpz2go1_1280.png">
        Avatar 4
      </option>
    </select>
  );
}

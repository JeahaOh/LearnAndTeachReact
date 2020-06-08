import React from 'react';

function Hello({ name, color, isSpecial }) {
  console.log(name, color);
  return (
    <div
      style={{
        color,
      }}
    >
      {isSpecial && <b>*</b>}
      HELLO {name}
    </div>
  );
}

Hello.defaultProps = {
  name: 'no name',
  color: 'dimgrey',
};

export default Hello;

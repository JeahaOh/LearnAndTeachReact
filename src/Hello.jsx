import React from 'react';

function Hello({ name, color }) {
  console.log(name, color);
  return (
    <div
      style={{
        color,
      }}
    >
      HELLO {name}
    </div>
  );
}

Hello.defaultProps = {
  name: 'no name',
  color: 'dimgrey',
};

export default Hello;

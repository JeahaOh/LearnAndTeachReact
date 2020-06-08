import React from 'react';
import Hello from './Hello';
import './styles.css';

export default function App() {
  const name = 'react';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1em',
  };
  //  comment

  return (
    <>
      {/* comment */}
      <Hello />
      <br
      // comment
      />
      <div style={style}>{name}</div>
      <div className="grey-box" />
    </>
  );
}

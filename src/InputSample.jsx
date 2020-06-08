import React, { useState } from 'react';

export default function InputSample() {
  const [text, setText] = useState('');

  const onChange = e => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}> RESET </button>
      <div>
        <b> value : {text}</b>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input name="name" placeholder="name" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}> RESET </button>
      <div>
        {name} {nickname}
      </div>
    </div>
  );
}

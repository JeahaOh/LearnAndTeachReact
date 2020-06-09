import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
  const text = useContext(MyContext);
  return <div>HI, {text}!</div>;
}

function Parent({ text }) {
  return <Child text={text} />;
}

function GrandParent() {
  return <Parent />;
}

export default function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? 'OK' : 'Not Okay'}>
      <GrandParent />
      <button
        onClick={() => {
          setValue(!value);
        }}
      >
        CLICK
      </button>
    </MyContext.Provider>
  );
}

import React from 'react';
import Hello from './Hello';
import './styles.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';

export default function App() {
  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" isSpecial />
        <Hello />
      </Wrapper>
      <Wrapper>
        <Counter />
      </Wrapper>
      <Wrapper>
        <InputSample />
      </Wrapper>
    </>
  );
}

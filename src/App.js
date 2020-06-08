import React from 'react';
import Hello from './Hello';
import './styles.css';
import Wrapper from '../Wrapper';

export default function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" isSpecial />
      <Hello />
    </Wrapper>
  );
}

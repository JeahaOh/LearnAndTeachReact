import React from 'react';
import Hello from './Hello';
import './styles.css';
import Wrapper from '../Wrapper';

export default function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

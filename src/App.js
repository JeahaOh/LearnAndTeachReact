import React, { useRef } from 'react';
import Hello from './Hello';
import './styles.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

export default function App() {
  const users = [
    {
      id: 1,
      username: 'asdf',
      email: '01@test.com',
    },
    {
      id: 2,
      username: 'qwer',
      email: '02@test.com',
    },
    {
      id: 3,
      username: 'zxcv',
      email: '03@test.com',
    },
  ];

  const nextId = useRef(users.length);
  console.log(nextId);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

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
      <Wrapper>
        <UserList users={users} />
      </Wrapper>
    </>
  );
}

import React, { useRef, useState } from 'react';
import Hello from './Hello';
import './styles.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

export default function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'asdf',
      email: '01@test.com',
      active: true,
    },
    {
      id: 2,
      username: 'qwer',
      email: '02@test.com',
      active: false,
    },
    {
      id: 3,
      username: 'zxcv',
      email: '03@test.com',
      active: true,
    },
  ]);

  const nextId = useRef(users.length + 1);
  console.log(nextId);

  const onCreate = () => {
    console.log(nextId.current);

    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
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
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      </Wrapper>
    </>
  );
}

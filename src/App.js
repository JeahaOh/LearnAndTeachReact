import React, { useRef, useState, useMemo, useCallback } from 'react';
import Hello from './Hello';
import './styles.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function coutActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

export default function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );

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

  const onCreate = useCallback(() => {
    console.log(nextId.current);

    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]);
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  }, []);

  //  users가 바뀌었을 때만 countActiveUsers 함수를 호출하도록 한다.
  const count = useMemo(() => coutActiveUsers(users), [users]);
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
        <div>활성 사용자 수 : {count}</div>
      </Wrapper>
    </>
  );
}

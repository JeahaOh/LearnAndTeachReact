import React, { useRef, useContext } from 'react';
import useInputs from './hooks/useInputs_reducer';
import { UserDispatch } from './App';

function CreateUser() {
  console.log('Render -> CreateUser');
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: '',
  });

  const { dispatch, nextUserId } = useContext(UserDispatch);
  const nextId = useRef(nextUserId);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  };

  return (
    <>
      <div>
        <input
          name="username"
          placeholder="username"
          onChange={onChange}
          value={username}
        />
        <input
          name="email"
          placeholder="email"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>regist</button>
      </div>
    </>
  );
}

export default React.memo(CreateUser);

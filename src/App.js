import React, { useReducer, useMemo, createContext } from 'react';
import Hello from './Hello';
import './styles.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import ContextSample from './ContextSample';

import produce from 'immer';
window.produce = produce;
//  immer test >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{
  console.group('immer test');
  const obj = {
    willChange: 1,
    wontChange: 10,
  };

  const nextObj = produce(obj, draft => {
    draft.willChange += 1;
  });

  console.log(obj);
  console.log(nextObj);

  const arr = [
    { id: 1, text: 'asdf' },
    { id: 2, text: 'hell' },
    { id: 3, text: 'js' },
  ];

  const nextArr = produce(arr, draft => {
    draft.push({ id: 4, text: 'react' });
    draft[1].text = draft[1].text + ' the js';
  });

  console.log(arr);
  console.log(nextArr);
  console.groupEnd('immer test');
}
//  immer test <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function coutActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
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
  ],
};
function usersReducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      // return {
      //   inputs: initialState.inputs,
      //   users: state.users.concat(action.user),
      // };
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id ? { ...user, active: !user.active } : user,
      //   ),
      // };
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id),
      // };
      return produce(state, draft => {
        const idx = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(idx, 1);
      });
    default:
      throw Error('Unhandled Action On UsersReducer.');
  }
  // immer는 기존의 로직이 복잡한 곳에서 사용하는 게 좋다.
  //  create나 remove 같은 경우는 immer를 사용하기엔 이미 간단함.
}

export const UserDispatch = createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const { users } = state;

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
        <UserDispatch.Provider
          value={{ dispatch, nextUserId: users.length + 1 }}
        >
          <CreateUser />
          <UserList users={users} />
          <div>활성 사용자 수 : {count}</div>
        </UserDispatch.Provider>
      </Wrapper>
      <Wrapper>
        <ContextSample />
      </Wrapper>
    </>
  );
}

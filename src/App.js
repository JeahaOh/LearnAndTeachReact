import React, { useReducer, useMemo, createContext } from 'react';
import Hello from './Hello';
import './styles.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import ContextSample from './ContextSample';

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
      //  reducer를 사용하면 inputs의 초기화와, users에 user를 추가하는 행동을 한번에 할 수 있다.
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      };
    default:
      throw Error('Unhandled Action On UsersReducer.');
  }
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

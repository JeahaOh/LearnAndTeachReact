import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;

  const { dispatch } = useContext(UserDispatch);

  useEffect(() => {
    console.log('User Component가 화면에 출력 됨.');
    console.log('user 값이 설정됨.', user);
    //  porps -> state
    //  REST API
    //  D3, video.js, OL
    //  setInterval, setTimout
    return () => {
      console.log('User Component가 화면에서 사라짐.');
      console.log('user 값이 바뀌기 전.', user);
      //  clearInterval, clearTimeout. 라이브러리 인스턴스 제거.
    };
  }, [user]);

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() =>
          dispatch({
            type: 'TOGGLE_USER',
            id,
          })
        }
      >
        {username}
      </b>
      &ensp;
      <span>({email})</span>
      <button
        onClick={() =>
          dispatch({
            type: 'REMOVE_USER',
            id,
          })
        }
      >
        remove
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <>
      <div>
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </>
  );
}
export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users,
);

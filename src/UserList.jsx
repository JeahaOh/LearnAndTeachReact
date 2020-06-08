import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

export default function UserList() {
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

import React from 'react';

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b>&ensp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>remove</button>
    </div>
  );
}

export default function UserList({ users, onRemove }) {
  return (
    <>
      <div>
        {users.map(user => (
          <User user={user} key={user.id} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}

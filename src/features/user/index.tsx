import { fromUser } from '@app/store';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserComponent: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(fromUser.selectAllUsers);
  const user = useSelector(fromUser.selectUserById(1));

  useEffect(() => {
    dispatch(fromUser.doFetchAllUsers());
  }, []);
  return (
    <div>
      Users
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
      {user?.name}
    </div>
  );
};

export default UserComponent;

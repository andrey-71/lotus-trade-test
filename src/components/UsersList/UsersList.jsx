import React from 'react';
import './UsersList.scss';
import User from '../User/User';

const UsersList = () => {
  return (
    <div className='user-list'>
      <User />
      <User />
      <User />
      <User />
    </div>
  );
};

export default UsersList;
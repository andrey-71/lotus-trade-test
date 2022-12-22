import React, {useEffect, useState} from 'react';
import './UsersList.scss';
import User from '../User/User';
import { users } from '../../utils/constants';

const UsersList = ({ time, timerList }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(users);
  }, []);

  return (
    <div className='user-list'>
      {userList.map((user, index) =>
        <User
          key={user.id}
          index={index}
          user={user}
          time={time}
          timer={timerList[index]}
        />
      )}
    </div>
  );
}

export default UsersList;
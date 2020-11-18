import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';

const UserList = () => {
    const users = useSelector(state => state);
    return <div className="collection">{
        users.length ? <div>{users.map(u => <UserItem key={u.id} user={u} />)}</div> : "Press Add new"
    }</div>
}

export default UserList;
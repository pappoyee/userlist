import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';

export default () => {
    const users = useSelector(state => state);
    return <div className="collection">{
        users.length ? <div>{users.map(u => <UserItem key={u.id} user={u} />)}</div> : "Press Add new"
    }</div>
}
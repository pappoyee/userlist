import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions';

const UserItem = ({ user }) => {
    const dispatch = useDispatch();

    const onChangeName = useCallback((v) => {
        const newName = v.target.value;
        dispatch(updateUser({ ...user, name: newName }))
    })

    const onChangeEmail = useCallback((v) => {
        const newEmail = v.target.value;
        dispatch(updateUser({ ...user, email: newEmail }))
    })
    return <div className="row container">
        <span className="col s6">
            <input onChange={onChangeName} value={user?.name} />
        </span>
        <span className="col s6">
            <input onChange={onChangeEmail} value={user?.email} />
        </span>
    </div>
}

export default UserItem;
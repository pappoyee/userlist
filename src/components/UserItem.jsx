import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions';

export default ({ user }) => {
    const dispatch = useDispatch();

    const onChangeName = useCallback((v) => {
        debugger;
        const newName = v.target.value;
        dispatch(updateUser({ ...user, name: newName }))
    })

    const onChangeEmail = useCallback((v) => {
        debugger;
        const newEmail = v.target.value;
        dispatch(updateUser({ ...user, email: newEmail }))
    })
    return <div className="row container">
        <span className="col s6 input-field">
            <input onChange={onChangeName} value={user?.name} />
        </span>
        <span className="col s6 input-field">
            <input onChange={onChangeEmail} value={user?.email} />
        </span>
    </div>
}
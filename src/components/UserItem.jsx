import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../appStore';

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const onChangeName = useCallback((v) => {
    const newName = v.target.value;
    dispatch(updateUser({ ...user, name: newName }))
  }, [dispatch, user])

  const onChangeEmail = useCallback((v) => {
    const newEmail = v.target.value;
    dispatch(updateUser({ ...user, email: newEmail }))
  }, [dispatch, user])
  return <div className="row" style={{
    marginBottom: "5px"
  }}>
    <span className="col s6">
      <input onChange={onChangeName} value={user?.name} placeholder="Full name" />
    </span>
    <span className="col s6">
      <input onChange={onChangeEmail} value={user?.email} placeholder="Email" />
    </span>
  </div>
}

export default UserItem;
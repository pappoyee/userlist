import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

export default () => {
    const dispatch = useDispatch();

    return (
        <div className="center-align">
            <button className="btn" onClick={() => dispatch(addUser())}>Add New</button>
        </div>
    )
}
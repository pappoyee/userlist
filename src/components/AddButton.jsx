import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

const AddButton = () => {
    const dispatch = useDispatch();

    return (
        <div className="center-align">
            <button className="btn" onClick={() => dispatch(addUser())}>Add New</button>
        </div>
    )
}
export default AddButton
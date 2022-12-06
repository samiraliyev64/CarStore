import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './bumperSlice'

export const BumperView = () => {
    const [value, setValue] = useState(1);
    const numOfBumpers = useSelector((state) => state.bumper.numOfBumpers)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of bumpers - {numOfBumpers}</h2>
            <button onClick={() => dispatch(ordered())}>Order bumper</button>
            <div className='input-container'>
                <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            </div>
            <button onClick={() => dispatch(restocked(value))}>Restock bumpers</button>
        </div>
    )
}
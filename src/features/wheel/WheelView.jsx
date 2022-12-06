import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './wheelSlice';

export const WheelView = () => {
    const [value, setValue] = useState(1);
    const numOfWheels = useSelector((state) => state.wheel.numOfWheels)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of wheels - {numOfWheels}</h2>
            <button onClick={() => dispatch(ordered())}>Order wheel</button>
            <div className='input-container'>
                <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            </div>
            <button onClick={() => dispatch(restocked(value))}>Restock wheels</button>
        </div>
    )
}
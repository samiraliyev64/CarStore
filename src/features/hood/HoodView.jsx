import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './hoodSlice';

export const HoodView = () => {
    const [value, setValue] = useState(1);
    const numOfHoods = useSelector((state) => state.hood.numOfHoods)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of hoods - {numOfHoods}</h2>
            <button onClick={() => dispatch(ordered())}>Order hood</button>
            <div className='input-container'>
                <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            </div>
            <button onClick={() => dispatch(restocked(value))}>Restock hoods</button>
        </div>
    )
}

export default HoodView
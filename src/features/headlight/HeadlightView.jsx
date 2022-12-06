import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from "./headlightSlice"

export const HeadlightView = () => {
    const [value, setValue] = useState(1);
    const numOfHeadlights = useSelector((state) => state.headlight.numOfHeadlights)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of headlights - {numOfHeadlights}</h2>
            <button onClick={() => dispatch(ordered())}>Order headlight</button>
            <div className='input-container'>
                <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            </div>
            <button onClick={() => dispatch(restocked(value))}>Restock headlights</button>
        </div>
    )
}

export default HeadlightView
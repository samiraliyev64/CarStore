import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './mirrorSlice';

export const MirrorView = () => {
    const [value, setValue] = useState(1);
    const numOfMirrors = useSelector((state) => state.mirror.numOfMirrors)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of mirrors - {numOfMirrors}</h2>
            <button onClick={() => dispatch(ordered())}>Order mirror</button>
            <div className='input-container'>
                <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            </div>
            <button onClick={() => dispatch(restocked(value))}>Restock mirrors</button>
        </div>
    )
}

export default MirrorView
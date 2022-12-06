import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './keychainSlice';

export const KeychainView = () => {
    const [value, setValue] = useState(1);
    const numOfKeychains = useSelector((state) => state.keychain.numOfKeychains)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of keychains - {numOfKeychains}</h2>
            <button onClick={() => dispatch(ordered())}>Order keychain</button>
            <div className='input-container'>
                <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            </div>
            <button onClick={() => dispatch(restocked(value))}>Restock keychains</button>
        </div>
    )
}

export default KeychainView
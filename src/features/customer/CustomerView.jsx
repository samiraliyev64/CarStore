import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomers } from './customerSlice';

export const CustomerView = () => {
    const customer = useSelector((state) => state.customer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCustomers())
    }, []);
    return (
        <div>
            <h2 className='customer-header'>List of our customers</h2>
            {customer.loading && <div>Loading...</div>}
            {!customer.loading && customer.error ? <div>Error: {customer.error}</div> : null}
            {!customer.loading && customer.customers.length ? (
                <ul className='customer-list'>
                    {
                        customer.customers.map(customer => (
                            <li key={customer.id}>{customer.name}</li>
                        ))
                    }
                </ul>
            ) : null}
        </div>
    )
}

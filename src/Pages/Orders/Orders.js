import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState()


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                // console.log('recived', data)
                setOrders(data)
            })
    }, [user?.email])

    
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure Want to cencel this order')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = orders.filter(odr => odr._id !== id)
                    setOrders(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id)
                const approving = orders.find(odr => odr._id === id)
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining, ]
                setOrders(newOrders);
            }
        })
    }

    return (
        <div className='my-12'>
            <div className="overflow-x-auto w-full">
                <h2 className='text-2xl text-center font-thin my-7'>You Have a<span>{orders?.lenght}</span> Orders Now</h2>
                <table className="table w-full">
                 
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Favorite Color</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                        {
                            orders?.map( order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;
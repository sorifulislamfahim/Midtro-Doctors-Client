import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import useTitle from '../../hooks/useTitle';
import OrderRow from './OrderRow';
import { toast } from 'react-toastify';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    useTitle('My-Reviws')

    useEffect(() => {
        fetch(`https://meditro-server.vercel.app/orders?email=${user?.email}`, {
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
            fetch(`https://meditro-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    
                    const remaining = orders.filter(odr => odr._id !== id)
                    setOrders(remaining);
                    toast.success('Delete successfully')
                }
            })
        }
    }

    return (
        <div className='my-12'>
            <div className="overflow-x-auto w-full">
                <h2 className='text-2xl text-center font-thin my-7'>This is Your Revew Page</h2>
                <div className='text-3xl text-center font-bold my-7 text-red-700'>
                    {
                        orders?.length === 0 ? 
                        <p>No reviews were added</p> : 
                        <p>You Have added {orders?.length} Revews</p>
                    }
                </div>
                <table className="table w-full">
                 
                    <thead>
                        <tr>
                            <th>
                                Delete Item
                            </th>
                            <th>Image & Name</th>
                            <th>Services</th>
                            <th>Edit Revew</th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                     
                        {
                            orders?.map( order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                            ></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;
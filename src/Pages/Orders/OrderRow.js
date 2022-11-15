import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete }) => {
    const { _id, serviceName, price, petaint, phone, service } = order;
    const [orderService, setOrderService] = useState();

    useEffect(() => {
        fetch(`https://meditro-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])



    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{petaint}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td><label htmlFor="my-modal" className="btn">edit</label></td>
            <td>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations Your update Succesfuly</h3>
                        <p className="py-4">You've been selected for a chance to</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Ok</label>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default OrderRow;
import React from 'react';

const OrderRow = ({order,handleDelete,handleStatusUpdate}) => {
   const {placeName,price,customer,phone,email,_id,status}=order;




    return (
        <tr>
        <th>
          <label>
            <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">{email}</div>
              <div className="text-sm opacity-50">{placeName}</div>
            </div>
          </div>
        </td>
        <td>
        {customer}
          <br/>
          <span className="badge badge-ghost badge-sm">{phone}</span>
        </td>
        <td>{price}</td>
        <th>
          <button onClick={()=> handleStatusUpdate(_id)} className='btn btn-ghost btn-xs'>{status? status : 'pending'}</button>
        </th>
      </tr>
    );
};

export default OrderRow;
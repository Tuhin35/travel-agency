import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAllBooking = ({ allBooking, handleDelete }) => {
  const { placeName, price, customer, phone, email, _id, status } = allBooking;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">

          <div>
            <div className="font-bold">{email}</div>
            <div className="text-sm opacity-50">{customer}</div>
            <span className="badge badge-ghost badge-sm">{phone}</span>
          </div>
        </div>
      </td>
      <td>
        {placeName}


      </td>
      <td>{price} <strong>৳</strong></td>
      <th>
        {/* <button onClick={()=> handleStatusUpdate(_id)} className='btn btn-ghost btn-xs'><Link to={'/payment'}>{status? status : 'pending'}</Link></button> */}
        {
          price && !allBooking.paid && <Link to={`/payment/${allBooking._id}`}>
            <button disabled
              className='btn btn-primary btn-sm'
            >Pay</button>
          </Link>
        }

        {
          price && allBooking.paid && <span
            className='text-green-600 text-xl'
          >Paid</span>


        }
      </th>
     
    </tr>
  );
};

export default DisplayAllBooking;
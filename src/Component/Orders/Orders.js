import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import OrderRow from './OrderRow';


const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([])
  // const url = ;

  useEffect(() => {

    fetch(`http://localhost:5000/order?email=${user?.email}`, {

      headers: {
        authorization: `Bearer ${localStorage.getItem('travelToken')}`
      }

    })

      .then(res => {
        if (res.status === 401 || res.status === 403) {
          logOut()
        }

        return res.json();
      })
      .then(data => setOrders(data))
      //  console.log(orders)

  }, [user?.email, logOut,orders])
  // console.log(orders)

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure to cancel this order")
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted successfully');
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining);
          }
        })
    }
  }

  const handleStatusUpdate = id => {
    fetch(`http://localhost:5000/orders/${id}`,
    {
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({status:'Approved'})
    })
    .then(res=>res.json())
    .then(data =>{
      // console.log(data)
      if(data.modifiedCount > 0){
        const remaining = orders.filter(odr => odr._id !== id);
        const approving = orders.find(odr => odr._id === id);
        approving.status = 'Approved';
        const newOrders = [...remaining,approving];
        setOrders(newOrders)
      }
    })
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-slate-100 ">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>customer</th>
              <th>Details</th>
              <th>Price</th>
              <th>Payment</th>


            </tr>
          </thead>
          <tbody >
            {/* row 1 */}
            {orders.map(order => <OrderRow
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            >

            </OrderRow>)

            }
           

          </tbody>
          {/* foot */}


        </table>
      </div>

    </div>
  );
};

export default Orders;
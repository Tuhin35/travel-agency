import React, { useEffect, useState } from 'react';
import DisplayAllBooking from './DisplayAllBooking'

const MyAppointment = () => {
    const [allBookings,setAllBookings] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/orders')
          .then(res => res.json())
          .then(data => setAllBookings(data))
    
      }, [allBookings])

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
                const remaining = allBookings.filter(odr => odr._id !== id);
                setAllBookings(remaining);
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
            const remaining = allBookings.filter(odr => odr._id !== id);
            const approving = allBookings.find(odr => odr._id === id);
            approving.status = 'Approved';
            const newOrders = [...remaining,approving];
            setAllBookings(newOrders)
          }
        })
      }



    return (
        <div>
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
            {allBookings.map(allBooking => <DisplayAllBooking
              key={allBooking._id}
              allBooking={allBooking}
              handleDelete={handleDelete}
              
            >

            </DisplayAllBooking>)

            }

          </tbody>
          {/* foot */}


        </table>
            
        </div>
    );
};

export default MyAppointment;
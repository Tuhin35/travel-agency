import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  // const {} = useQuery({
  //     queryKey:['users'],
  //     queryFn: async()=>{
  //         const res = await fetch('http://localhost:5000/users');
  //         const data = await res.json();

  //         return data;
  //     }
  // })

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [users])
  // console.log(users);

  
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure to cancel this order")
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted successfully');
            const remaining = users.filter(odr => odr._id !== id);
            setUsers(remaining);
          }
        })
    }
  }

  const handleMakeAdmin= id =>{
    fetch(`http://localhost:5000/users/admin/${id}`,{
     method:'PUT',
     headers:
     {
       authorization:`bearer ${localStorage.getItem('travelToken')}`
     }
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
     if(data.modifiedCount > 0){
       toast.success('make admin successful')
      //  refetch();
       // console.log(data)
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
            <th>name</th>
            <th>email</th>
            <th>Make Admin</th>




          </tr>
        </thead>
        <tbody >

          {

            users.map((user, i) => <tr key={user._id} >
              <th>
                <label>
                  <button onClick={() => handleDelete(user._id)} className='btn btn-ghost'>X</button>
                </label>
              </th>
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>{user?.role !=="admin" && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>} </th>


            </tr>)


          }

        </tbody>


      </table>

    </div>
  );
};

export default AllUsers;
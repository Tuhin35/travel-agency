import React, { useContext } from 'react';
import { useNavigate , useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { error } from 'daisyui/src/colors';


const CheckOut = () => {
    const places = useLoaderData();
    const navigate = useNavigate();
  
    const {_id, title, tags } = places;
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            place: _id,
            placeName: title,
            price:tags.Cost,
            customer: name,
            email,
            phone,
            message
            }

            fetch('https://travel-agency-server-topaz.vercel.app/orders',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Booking successfully')
                form.reset();  
                navigate('/orders')
            })
            .then(error => console.log(error))
        }



    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2> have a good journey</h2>
                <h2 className='text-4xl'>{title}</h2>
                <h4 className='text-3xl'> Price: {tags.Cost}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="first name" className="input input-ghost w-full input-border" />
                    <input name='lastName' type="text" placeholder="last name" className="input input-ghost w-full input-border" />
                    <input name='phone' type="text" placeholder="Your Phone" required className="input input-ghost w-full input-border" />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} readOnly className="input input-ghost w-full input-border" />

                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" id="" required placeholder='Your Comments' ></textarea>
                <input className='btn' type="submit" value="submit your Booking" />
            </form>

        </div>
    );
};

export default CheckOut;
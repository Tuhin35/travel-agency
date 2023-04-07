import React, { useEffect, useState } from 'react';
import DisplayCart from './DisplayCart';

const AllCart = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))




    }, [])
    console.log(places)


   

    return (
      <div className='grid grid-cols-3 gap-10 mt-5'>
           {
                places.map(place =><DisplayCart
                key={place._id}
                place={place}
                ></DisplayCart>)
               }
      </div>

        
        

    );
};

export default AllCart;
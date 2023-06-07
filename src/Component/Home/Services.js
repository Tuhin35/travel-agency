import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/places/limit')
        .then(res => res.json())
        .then(data => setPlaces(data))
  
  
  
  
    }, [places])


    return (
        <div>
           
     <div className='grid  lg:grid-cols-3 bg-slate-300 md:grid-cols-2 gap-2'>
        {
          places.map(place => <div className="card inline mb-5  ml-5 mt-5 grid-cols-2 w-80 bg-slate-200 shadow-xl">
            <figure className="">
              <img src={place.picture} alt="" className=" rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{place.title}</h2>
              <p>{place.about.split(' ').slice(0,20).join(' ')}...</p>
              <p>About {place.Per_Year} people every year visit this place.</p>
              <div className="card-actions justify-end">
                    <div className="badge badge-outline">Rating : {place.tags.rating}</div>
                    <div className="badge badge-outline">Price : {place.tags.Cost}</div>
                </div>
              <div className="card-actions">
                <Link to={`/checkout/${place._id}`}>
                  <button className="btn btn-primary">Booking</button>
                </Link>
              </div>
            </div>
          </div>)
        }

      </div>
        <button className='btn mx-auto text-center w-2/12'><Link to="/Places">See All Place</Link></button>
   
        </div>
    );
};

export default Services;
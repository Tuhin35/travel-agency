import React, { useEffect, useState } from 'react';

import './news.css'

import { Link } from 'react-router-dom';

const News = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('https://travel-agency-server-topaz.vercel.app/places/limit')
      .then(res => res.json())
      .then(data => setPlaces(data))




  }, [places])





  return (
    <div className='news-container  min-h-screen flex md:grid-cols-1  lg:grid-cols-4 flex-row text-black p-10 w-full md:w-auto'>
      <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
          Our travel management system is user-friendly and intuitive, so you don't need to have any technical expertise to use it. Our customer support team is available around the clock to assist you with any questions or issues you may encounter.<br className="hidden md:block" />

          
        </h2>
        <p className="max-w-xl mb-4 text-base  md:text-lg">
          Our system provides real-time updates on flight and hotel availability and prices, so you can quickly find the best deals and make reservations on the spot. You can also customize your search criteria, such as preferred airlines and hotel chains, to ensure
          that your employees are comfortable and productive while on the road.
        </p>
        <a
          href="/Places"
          aria-label=""
          className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
        >
          Learn more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
      <div className='grid lg:grid-cols-2 gap-2 mt-1'>
        {
          places.map(place => <div className="card inline mb-5 grid-cols-2 w-80 bg-slate-500 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={place.picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{place.title}</h2>
              <p>{place.about}</p>
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

        <button className='btn text-center'><Link to="/Places">See All Place</Link></button>
      </div>

    </div>
  );
};

export default News;
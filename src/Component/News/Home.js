import React, { useEffect, useState } from 'react';
import AllCart from "../Cart/AllCart"
import './news.css'

const News = () => {
    const [places,setPlaces] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/places')
        .then(res =>res.json())
        .then(data => setPlaces(data))




    },[])
    console.log(places)




    return (
        <div className='news-container flex grid-cols-4 flex-row h-screen text-black p-10  w-full md:w-auto'>
            <div className=' basis-2/5 grid-cols-1 text-center'>
                <p className='text-4xl'>Cox's bazar</p>
                <p className='text-xl text-black'>With our system, you can easily book flights, hotels, rental cars, and other travel-related services for your employees. You can also set travel policies and budgets, track expenses,
                 and generate reports to keep track of your travel spending. ...</p>
              
            </div>
            <div className='basis-3/5 flex flex-row grid-cols-3 grid-flow-col m-2'>
               {/* {
                places.map(place =><AllCart
                key={place._id}
                place={place}
                ></AllCart>)
               } */}
               

            </div>

        </div>
    );
};

export default News;
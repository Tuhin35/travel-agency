import React, { useEffect, useState } from 'react';

import { data } from 'autoprefixer';
import DisplayCard from './DisplayCard';


const AllCard = () => {



  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5)


  const [places, setPlaces] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(`https://travel-agency-server-topaz.vercel.app/places?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => {
        setPlaces(data.places)
        setCount(data.count)
      }
      )




  }, [page, size])
  const pages = Math.ceil(count / size)

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5  mx-auto'>
        {
          places.map(place => <DisplayCard
            key={place._id}
            place={place}
          ></DisplayCard>)
        }

      </div>
      <div className="pagination">
        <p>Currently selected page : {page + 1} and Size is {size}</p>
        {
          [...Array(pages).keys()].map(number => <button
            className='btn m-2 btn-warning' key={number}

            onClick={() => setPage(number)
            }
          >
            {number + 1}

          </button>)
        }
        <select className='bg-slate-400' onChange={event => setSize(event.target.value)}>
          <option value="3" >3</option>
          <option value="5" selected>5</option>
          <option value="8" >8</option>
        </select>
      </div>
    </div>




  );
};

export default AllCard;
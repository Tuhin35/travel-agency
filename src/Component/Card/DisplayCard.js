import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCard = ({ place }) => {
    const { _id, title, picture, Per_Year, about, tags } = place

    return (
        <div className="card inline mb-5  ml-5 mt-5 grid-cols-2 w-80 bg-slate-200 shadow-xl">
            <figure className="">
                <img src={picture} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{about.split(' ').slice(0,20).join(' ')}...</p>
                <p className='text-semibold'>About {Per_Year} people every year visit this place.</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Rating :  {tags.rating}</div>
                    <div className="badge badge-outline"> Price : {tags.Cost}</div>
                </div>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Booking</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;
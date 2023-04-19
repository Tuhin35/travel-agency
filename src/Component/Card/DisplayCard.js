import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCard = ({ place }) => {
    const { _id, title, picture, Per_Year, about, tags } = place

    return (
        <div className="card grid-cols-2 w-96 bg-slate-500 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{about}</p>
                <p>About {Per_Year} people every year visit this place.</p>
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
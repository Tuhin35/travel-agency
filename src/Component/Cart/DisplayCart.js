import React from 'react';

const DisplayCart = ({ place }) => {
    const { _id, title, picture, Per_Year, about, tags } = place
    console.log(picture)
    return (
        <div className="card grid-cols-2 w-96 bg-slate-500 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{about}</p>
                <p>About {Per_Year} people every year visit this place.</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayCart;
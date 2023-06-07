import React, { useEffect, useState } from 'react';

const Blog = () => {

  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => setReviews(data))

  }, [reviews])
  //  console.log(reviews)
  // const { customer, placeName, message, email } = reviews

  return (
    <div className='grid  md:grid-cols-2'>
      <div>
        <h2 className='text-4xl'>This is blog</h2>
      </div>
      <div className='grid  md:grid-cols-2 text-start gap-5 mt-5 mr-2'>
        {
          reviews.map(review => <div className="card  bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title"> Customer Name: {review.customer} </h2>
              <p >Email: {review.email}</p>
              <p>Comments: {review.message}</p>
              <div className="card-actions justify-end">
                <p className='text-2xl'>Place: {review.placeName}</p>
              </div>
            </div>
          </div>
          )
        }
      </div>
      
    </div>
  );
};

export default Blog;
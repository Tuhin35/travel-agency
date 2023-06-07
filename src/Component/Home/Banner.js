import React from 'react';

const Banner = () => {
    return (
        <div className="news-container  text-center w-full  px-10 mb-12 xl:mb-0 xl:pr-16 ">
       
      <p className=" max-w-xl mx-auto mb-4 font-sans text-2xl  font-semibold md:text-lg">
          Our system provides real-time updates on flight and hotel availability and prices, so you can quickly find the best deals and make reservations on the spot. You can also customize your search criteria, such as preferred airlines and hotel chains, to ensure
          that your employees are comfortable and productive while on the road.
        </p>
       
        <h2 className="max-w-full  mb-6 font-sans text-4xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
          Our travel management system is user-friendly and intuitive, so you don't need to have any technical expertise to use it. Our customer support team is available around the clock to assist you with any questions or issues you may encounter.<br className="hidden md:block" />

          
        </h2> 
       
        <a
          href="/Places"
          aria-label=""
          className="inline-flex btn items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
        >
          lets exploring the world
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    );
};

export default Banner;
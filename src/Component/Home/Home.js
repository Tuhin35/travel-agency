import React, { useEffect, useState } from 'react';

import './news.css'

import { Link } from 'react-router-dom';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
 





  return (
    <div className='min-h-screen flex flex-col text-black  w-auto'>
     <Banner></Banner>
     <Services></Services>
           
    </div>
  );
};

export default Home;
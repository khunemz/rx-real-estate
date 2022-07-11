import React, { useContext } from 'react';
import { HouseContext } from '../components/HouseContext';
import Banner from './../components/Banner'
import HouseList from '../components/HouseList'
import House from '../components/House'

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;

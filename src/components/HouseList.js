import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im'
import { HouseContext } from './HouseContext';
import House from './House';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return <ImSpinner2 className='mx-auto animate-spin text-vioload-700 text-4xl mt-[200px]' />
  }

  if(houses.length < 1) {
    return <div className='mx-auto text-center text-3xl text-gray-400 mt-48'>No data to show</div>
  }
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-1'>
          { houses.map((house,index) => {
            return (
              <Link to={`property/${house.id}`}
                key={index}
              >
                <House house={house} />
              </Link>
            )
          }) }
        </div>
      </div>
    </section>
  );
};

export default HouseList;


import React, { useState, useContext } from 'react';

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext';
const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false)
  const priceList = [
    {
      value: 'Price Range (any)',
    },
    {
      value: '0-10000',
    },
    {
      value: '10001-30000',
    },
    {
      value: '30001-100000',
    },
    {
      value: '100001-130000',
    },
    {
      value: '130001-160000',
    },
    {
      value: '160001-190000',
    },
    {
      value: '190000-1000000',
    }
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-light'>{price}</div>
          <div className='text-[13px]'>Select your price</div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (<RiArrowDownSLine className='dropdown-icon-secondary' />)
        }
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {priceList.map((item, index) => {
          return (<Menu.Item
            as='li'
            key={index}
            className="cursor-pointer hover:text-violet-700 transition"
            onClick={() => setPrice(item.value)}
          >{item.value}</Menu.Item>)
        })}
      </Menu.Items>
    </Menu>
  )
};

export default PriceRangeDropdown;


import React, { useState, useContext } from 'react';

import { RiHome5Line , RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext';
const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false)
  if(!properties) return;

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-light'>{ property }</div>
          <div className='text-[13px]'>Select your property</div>
        </div>
        {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) : (<RiArrowDownSLine className='dropdown-icon-secondary' />)
          }
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map( (item,index) => {
          return (<Menu.Item 
            as='li' 
            key={index} 
            className="cursor-pointer hover:text-violet-700 transition"
            onClick={() => setProperty(item)}
          >{ item }</Menu.Item>)
        })}
      </Menu.Items>
    </Menu>
  )
};

export default PropertyDropdown;


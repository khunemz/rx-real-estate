import React, { useState, useEffect, createContext} from 'react';

import { housesData } from '../data'

export const HouseContext = createContext();

export const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState()
  const [price, setPrice] = useState('Price (any)')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const allCountries = houses.map((item, index) => {
      return item.country;
    });
    const unique = ['Location (any)', ...new Set(allCountries)]
    setCountries(unique);
    return () => { }
  }, [])

  useEffect(() => {
    const allProperties = houses.map((house, index) => {
      return house.type;
    });
    const unique = ['Select your place (any)', ...new Set(allProperties)]
    setProperties(unique);
    return () => { }
  }, [])
  


  const handleClick = (value) => {
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }

    const isDefaultCountry = isDefault(country);
    const isDefaultProperty = isDefault(property);
    if(isDefaultCountry || isDefaultProperty) {
      return;
    }
    const priceLower = parseInt(price.split('-')[0]);
    const priceUpper = parseInt(price.split('-')[1]);

    console.log('price lower : ', priceLower);
    console.log('price upper : ', priceUpper);
    console.log('property : ', property);

    const newHouseList = housesData.filter(item => {
      const housePrice = parseInt(item.price);
      if(item.country === country && item.type === property && (housePrice >= priceLower && housePrice <= priceUpper)) {
        return item;
      }
    })

    console.log('new house list : ', newHouseList);
    setHouses(newHouseList);
  }

  return <HouseContext.Provider value={{
    houses, setHouses,
    country, setCountry, 
    countries, setCountries, 
    property, setProperty, 
    properties, setProperties, 
    price, setPrice, 
    loading, setLoading,
    handleClick,
  }}>
    { children }
  </HouseContext.Provider>;
};

export default HouseContextProvider;

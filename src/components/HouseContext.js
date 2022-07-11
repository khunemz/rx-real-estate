import React, { useState, useEffect, createContext} from 'react';

import { housesData } from '../data'

export const HouseContext = createContext();

export const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price (any)')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const allCountries = houses.map((item, index) => {
      return item.country;
    });

    const unique = ['Location (any)', ...new Set(allCountries)]
    setCountries(unique);
    return () => {
      
    }
  }, [houses])

  return <HouseContext.Provider value={{
    houses, setHouses,
    country, setCountry, 
    countries, setCountries, 
    property, setProperty, 
    properties, setProperties, 
    price, setPrice, 
    loading, setLoading
  }}>
    { children }
  </HouseContext.Provider>;
};

export default HouseContextProvider;

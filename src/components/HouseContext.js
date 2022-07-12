import React, { useState, useEffect, createContext } from 'react';

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
    const allCountries = housesData.map((item, index) => {
      return item.country;
    });
    const unique = ['Location (any)', ...new Set(allCountries)]
    setCountries(unique);
    return () => { }
  }, [])

  useEffect(() => {
    const allProperties = housesData.map((house, index) => {
      return house.type;
    });
    const unique = ['Select your place (any)', ...new Set(allProperties)]
    setProperties(unique);
    return () => { }
  }, [])



  const handleClick = (value) => {
    setLoading(true)
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }

    const isDefaultCountry = isDefault(country);
    const isDefaultProperty = isDefault(property);
    const isDefaultPrice = isDefault(price);
    const priceLower = parseInt(price.split('-')[0]);
    const priceUpper = parseInt(price.split('-')[1]);
    let newHouseList = housesData.filter(item => {
      const housePrice = parseInt(item.price);
      if (item.country === country && item.type === property && (housePrice >= priceLower && housePrice <= priceUpper)) {
        return item;
      }
    })
    // possible bug here
    if (isDefaultCountry && isDefaultProperty && isDefaultPrice) {
      setHouses(housesData);
      return;
    } else if(!isDefaultCountry && isDefaultProperty && isDefaultPrice) {
      newHouseList = housesData.filter(house => house.country  === country)
    } else if(!isDefaultProperty && !isDefaultCountry && isDefaultPrice) {
      newHouseList = housesData.filter(house => house.type  === property && house.country  === country)
    } else if(!isDefaultProperty && isDefaultCountry && isDefaultPrice) {
      newHouseList = housesData.filter(house => house.type  === property)
    } else if (!isDefaultPrice && isDefaultProperty && isDefaultCountry) {
      newHouseList = housesData.filter(house => (parseInt(house.price) >= priceLower && parseInt(house.price) <= priceUpper))
    } else if (!isDefaultPrice && !isDefaultProperty && isDefaultCountry) {
      newHouseList = housesData.filter(house => house.country  === country && (parseInt(house.price) >= priceLower && parseInt(house.price) <= priceUpper))
    } else if (!isDefaultPrice && isDefaultProperty && !isDefaultCountry) {
      newHouseList = housesData.filter(house => house.type  === property && (parseInt(house.price) >= priceLower && parseInt(house.price) <= priceUpper))
    }

    setHouses(newHouseList);
    setLoading(false)
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
    {children}
  </HouseContext.Provider>;
};

export default HouseContextProvider;

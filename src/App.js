import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';

const App = () => {
  return (
    <HouseContextProvider>
      <BrowserRouter>
        <div className='max-w-[1440px] mx-auto bg-white'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/property/:id' element={<PropertyDetails />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HouseContextProvider>
  );
};

export default App;

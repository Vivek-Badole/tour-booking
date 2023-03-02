import React from 'react';
import {Routes,Route,Navigate} from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';
import Tours from '../Pages/Tours';
import TourDetails from '../Pages/TourDetails';
import ThankYou from '../Pages/ThankYou';
import About from '../Pages/About';
import ContactPage from '../Pages/ContactPage';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  )
}

export default Routers;
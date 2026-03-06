import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import MainLayout from './Component/MainLayout';
import Footer from './Component/Footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Outlet></Outlet>
      <Hero></Hero>
      <MainLayout></MainLayout>
     <Footer></Footer>
    </div>
  );
};

export default App;
import React from 'react'
import "./App.css"
import NavBar from '../../components/Modules/Navbar/Navbar';
import Header from '../../components/Templates/Home/Header/Header';
import AboutUs from '../../components/Templates/Home/About-us/About-us';
import OurServices from '../../components/Templates/Home/OurServices/OurServices';

function App() {
  return (
    <div className='container' dir='rtl'>
      <NavBar />
      <Header />
      <AboutUs />
      <OurServices />
    </div>
  );
}

export default App;

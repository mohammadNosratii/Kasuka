import React from 'react'
import "./App.css"
import NavBar from '../../components/Modules/Navbar/Navbar';
import Header from '../../components/Templates/Home/Header/Header';
import AboutUs from '../../components/Templates/Home/About-us/About-us';

function App() {
  return (
    <div className='container' dir='rtl'>
      <NavBar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;

import React from 'react'
import "./App.css"
import NavBar from '../../components/Modules/Navbar/Navbar';
import Header from '../../components/Templates/Home/Header/Header';

function App() {
  return (
    <div className='container' dir='rtl'>
      <NavBar />
      <Header />
    </div>
  );
}

export default App;

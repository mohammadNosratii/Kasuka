import React from "react";
import "./App.css";
import NavBar from "../../components/Modules/Navbar/Navbar";
import Header from "../../components/Templates/Home/Header/Header";
import AboutUs from "../../components/Templates/Home/About-us/About-us";
import OurServices from "../../components/Templates/Home/OurServices/OurServices";
import Portfolio from "../../components/Templates/Home/Portfolio/Portfolio";
import OurTeam from "../../components/Templates/Home/OurTeam/OurTeam";
import GoogleMap from "../../components/Templates/Home/GoogleMap/GoogleMap";
import Footer from "../../components/Modules/Footer/Footer";

function App() {
  return (
    <div className="container" dir="rtl">
      <NavBar />
      <Header />
      <AboutUs />
      <OurServices />
      <Portfolio />
      <OurTeam />
      <GoogleMap />
      <Footer />
    </div>
  );
}

export default App;

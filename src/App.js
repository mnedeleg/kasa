import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "../src/components/navBar/navBar";
import singleAppartment from './components/Appartment/singleCardAppartment';
import FooterPage from "../src/components/Footer/Footer";

import "./components/navBar/navBar.css";
import "./components/Appartment/appartment.style.css";
import "./components/banner/banner.css";
import "./components/PageNotFound/PageNotFound.css";
import "../src/components/Footer/Footer.css";
import "../src/components/Appartment/carousel.css";
import "../src/components/Appartment/collapse.css"
import "./pages/accommodation.css";
import "./pages/about.css";


function App() {
  return (
    <div>
      
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>,
      <Route path="/logement/:id" element={<Accommodation/>}>
        {/* <singleAppartment/> */}
      </Route>,
      <Route path="/a-propos" element={<About/>}></Route>,
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  </BrowserRouter>
  <FooterPage/>
  
  </div>
  );
}

export default App;


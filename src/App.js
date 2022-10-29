import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import Error from "./pages/Notfound";
import User from "../src/user/index";

import "./components/navBar/navBar.css";


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>,
      <Route path="/logement" element={<Accommodation/>}></Route>,
      <Route path="/a-propos" element={<About/>}></Route>,
      <Route path="page-introuvable" element={<Error/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;


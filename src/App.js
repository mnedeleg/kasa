import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import Error from "./pages/Notfound";
import User from "../src/user/index";
import NavBar from "../src/components/navBar/navBar";


import "./components/navBar/navBar.css";


function App() {
  return (
    <div>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>,
      <Route path="/logement/:id" element={<Accommodation/>}></Route>,
      <Route path="/a-propos" element={<About/>}></Route>,
      <Route path="page-introuvable" element={<Error/>}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;


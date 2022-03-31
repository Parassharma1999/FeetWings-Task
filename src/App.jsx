import React from 'react';
import {Router,Route,Routes} from "react-router"
import Navbar from './Components/Navbar';
import "./Style.css"
import CareerPageMain from './Components/CareerPageMain';
import CareerPage2 from './Components/CareerPage2';

const App = () => {
  return (
    <div>
  <Navbar/>
    <Routes>
  <Route path="/" element={<CareerPageMain/>}/>
  <Route path="/jobDescription" element={<CareerPage2/>}/>
    </Routes>
    </div>
  )
}

export default App
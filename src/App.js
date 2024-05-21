import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_page/Landing_Page';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';

import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Landing_Page />
                  <Routes>
                    <Route path="/" element={<Landing_Page/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/SignUp" element={<SignUp/>}/>


                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                  </Routes>
            </BrowserRouter>
        </div>
      );
}

export default App;
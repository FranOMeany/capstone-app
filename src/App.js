import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_page/Landing_Page';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar />
                  <Routes>
                  </Routes>
            </BrowserRouter>
        </div>
      );
}

export default App;
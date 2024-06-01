import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_page/Landing_Page';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';

import Notification from './Components/Notification/Notification';
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Notification>
                  <Routes>
                    <Route path="/" element={<Landing_Page/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/SignUp" element={<SignUp/>}/>
                    <Route path="/InstantConsultation" element={<InstantConsultation/>} />
                    <Route path="/BookingConsultation" element={<BookingConsultation/>} />
                    <Route path="/ReviewForm" element={<ReviewForm/>}/>
                    <Route path="/ProfileCard" element={<ProfileCard/>}/>
                    <Route path="/ReportsLayout" element={<ReportsLayout/>}/>
                  </Routes>
                </Notification>
            </BrowserRouter>
        </div>
      );
}

export default App;
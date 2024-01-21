import React from "react";
import {useState} from "react"
import Header from "./components/Header";
import Purpose from "./components/Pages/Homepage/Purpose";
import MediumPage from "./components/Pages/MediumPage";
import Cart from "./components/Pages/CartPage.jsx/Cart";
import SignUp from "./components/Pages/AccountsPage/SignUp";
import Help from "./components/Pages/HelpPage/Help";
import SignIn from "./components/Pages/AccountsPage/SignIn";
import Reset from "./components/Pages/AccountsPage/Reset";
import Slider from "./components/Pages/Homepage/Slider";
import Drinks from "./components/Pages/DrinksPage/Drinks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reviews from "./components/Pages/Homepage/Reviews";
import Footer from "./components/Footer";
import "../src/App.css";

export default function App() {
  const [username, setUsername] = useState(""); 

  const updateUsername = (firstName) => {
    setUsername(firstName);
  };
  return (
    <Router>
      <div>
        <Header username={username} setUsername={setUsername}/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider/>
                <Purpose />
                <Reviews />
              </>
            }
          />
          <Route path="/drinks" element={<MediumPage/>}/>
          <Route path="/drinks/:brandName" element={<Drinks/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signIn" element={<SignIn updateUsername={updateUsername} username={username} setUsername={setUsername}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/reset" element={<Reset/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

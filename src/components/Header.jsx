import React, { useContext, useEffect, useState } from "react";
import "../css/Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import { RiFileList2Line, RiFileList2Fill } from "react-icons/ri";
import { MdPayment, MdPerson } from "react-icons/md";
import { GrCircleQuestion } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6"; 
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase/config";
import "react-toastify/dist/ReactToastify.css";
import logo from "../img/logo.jpeg"
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "./redux/slice/authSlice";

export default function Header({ username, setUsername }) {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState();
  const navigate = useNavigate();

  function cart() {
    navigate("/cart");
  }
  function help() {
    navigate("/help");
  }
  function signIn() {
    navigate("/signIn");
  }

  function logoutUser() {
    signOut(auth)
      .then(() => {
        toast.success("Signed Out");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Sign Out Failed");
      });
  }

  // Monitor signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const uid = user.uid;
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const u1WithoutNumbers = u1.replace(/\d+/g, "");
          const uName = u1WithoutNumbers.charAt(0).toUpperCase() + u1.slice(1);
          // console.log(uName);
          setUsername(uName);
        } else {
          setUsername(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            username: user.displayName ? user.displayName : username,
            userId: user.uid,
          })
        );
        setIsSignedIn(false);
      } else {
        setUsername("");
        dispatch(REMOVE_ACTIVE_USER());
        setIsSignedIn(true);
      }
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="header">
      <ToastContainer />
      <nav>
        <div className="nav-start">
          <div className="nav-image">
            <img src={logo} alt="Logo" />
          </div>
          <Link className="home" to="/">
            <h4>Naija's Beverages</h4>
          </Link>
        </div>
        <div className="search">
            <input type="text" placeholder="Search Beverages" />
            <button className="search-icon">
              <BsSearch />
            </button>
          </div>
        <div className="nav-end">
          <div className="account-somn">
            {isSignedIn ? (
              <button className="btn-account">
                <RxPerson className="header-icons"/>
                <span className="header-text">Account</span>
              </button>
            ) : (
              <button className="btn-account">
                <BsPersonFillCheck className="header-icons"/>
                <span className="header-text">Hi, {username}</span>
              </button>
            )}
            <div className="dropdown">
              {isSignedIn ? (
                <div className="dropdown-content">
                  <button onClick={signIn}>Sign In</button>
                  <div className="dropdown-dets first" onClick={signIn}>
                    <RxPerson className="header-icons"/>
                    <p>My Account</p>
                  </div>
                  <div className="dropdown-dets" onClick={signIn}>
                    <RiFileList2Line />
                    <p>Orders</p>
                  </div>
                </div>
              ) : (
                <div className="dropdown-content">
                  <div className="dropdown-dets">
                    <MdPerson />
                    <p>My Account</p>
                  </div>
                  <div className="dropdown-dets">
                    <RiFileList2Fill />
                    <p>My Orders</p>
                  </div>
                  <div className="dropdown-dets">
                    <FaLocationDot />
                    <p>Delivery Address</p>
                  </div>
                  <div className="dropdown-dets">
                    <MdPayment />
                    <p>Payment Methods</p>
                  </div>
                  <button onClick={logoutUser}>Log Out</button>
                </div>
              )}
            </div>
          </div>
          <div className="carty">
            <button className="btn" onClick={help}>
              <GrCircleQuestion className="header-icons"/>
              <span className="header-text">Help</span>
            </button>
          </div>
          <div className="carty">
            <button className="btn" onClick={cart}>
              <AiOutlineShoppingCart className="header-icons"/>
              <span className="header-text">Cart</span>
            </button>
            <span className="cartnum">7</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React, { useContext, useState, useRef, useEffect } from "react";
import "../../../css/SignIn.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn({ updateUsername }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  function togglePasswordVisibility() { 
    setShowPassword(!showPassword);
  }

  const provider = new GoogleAuthProvider();
  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const displayName = user.displayName;
        const firstName = displayName.split(" ")[0];
        updateUsername(firstName);
        toast.success(`Welcome ${firstName}`);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login Failed");
      });
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Welcome Back");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Incorrect Credentials");
        setIsLoading(false);
      });
  };

  return (
    <div className="sign-in">
      <ToastContainer />
      <h2>Sign In</h2>
      <form action="" className="signIn-form" onSubmit={loginUser}>
        <div className="signIn-div">
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            ref={userRef}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="signIn-div">
          <label htmlFor="">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <Link to="/reset" className="reset-link">
          Forgot Password?
        </Link>
        <button disabled={isLoading}>
          {isLoading ? <div className="spinning-loader"></div> : "Login"}
        </button>
        <h6>OR</h6>
        <div className="google" onClick={signInGoogle}>
          <p>
            <FcGoogle />
            Login with Google
          </p>
        </div>
      </form>
      <Link to="/signup" className="signin-link">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
}

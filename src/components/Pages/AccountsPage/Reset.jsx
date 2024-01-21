import React, { useContext, useState } from "react";
import "../../../css/Reset.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { auth } from "../../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

export default function Reset() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset Link Sent To Email")
        setIsLoading(false)
      })
      .catch((error) => {
        toast.error("Password Reset Unsuccessful")
        setIsLoading(false)
      });
      setEmail("")
  };

  return (
    <div className="reset">
      <ToastContainer/>
      <h2>Reset Password</h2>
      <form className="signIn-form" onSubmit={resetPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button disabled={isLoading}>
          {isLoading ? <div className="spinning-loader"></div> : "Reset Password"}
        </button>
        <div className="other-links">
          <Link className="change" to="/signIn">
            Login
          </Link>
          <Link className="change" to="/signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

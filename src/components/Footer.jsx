import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Naija's Beverages</h2>
      <p>Built by Toluwalase</p>
      <div className="footer-icons">
        <a className="icons" href="https://twitter.com/herr_tolu?s=21&t=EUkvX5RP-YT4nv_qW85k_Q" target="_blank"><FaTwitterSquare /></a>
        <a className="icons" data-allow-intent href="mailto:toluwalase987@gmail.com" target="_blank"><SiGmail /></a>
        <a className="icons" href="https://www.linkedin.com/in/toluwalase-kunle-john-882296160/" target="_blank"><BsLinkedin /></a>
      </div>
      <p>&copy;Copyright by Toluwalase </p>
    </footer>
  );
}

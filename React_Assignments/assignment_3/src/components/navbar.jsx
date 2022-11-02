import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Registration from "./Registration";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
          <b>H</b>otel
            <b>B</b>ooking
          </h2>
        </div>
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/Login'>Login</Link>
            </li>
            <li>
              <Link to='/Registration'>Registration</Link>
            </li>
            <li>
                <Link  to="/ListOfHotel">List of Hotel</Link>
            </li>
            <li>
                <Link  to="/BookTable">Book Table</Link>
            </li>
            <li>
                <Link  to="/SelectedHotelDetails">Selected Hotels</Link>
            </li>
            <li>
                <Link  to="/CancelReservation">CancelReservation</Link>
            </li>
          </ul>
        </div>
        {/* 3rd social media*/}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a>
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a>
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a>
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
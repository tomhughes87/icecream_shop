import React from "react";
import "./index.css";
import basketIcong from "./basketIcon.png";
import accountIcon from "./accountIcon.png";
import logo from "./logo.svg";

export default function NavBar() {
  return (
    <>
      <div id="NavBar-Container">

     
        <div id="Navbar-Mobile">
          <div className="Hamburger-Menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>

            <ul className="menu__box">
              <li>
                <a className="menu__item" href="#">
                  Menu
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  Promos
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  Quiz
                </a>
              </li>
            </ul>
          </div>
        </div>
          


        <ul id="NavBar-LeftSection">
          <img id="NavBar-Logo" src={logo} alt="Italian Trulli" />

          <li className="NavLink-Container">
            <p className="NavLink-Text">Menu</p>
            <div className="NavLink-Underline"></div>
          </li>

          <li className="NavLink-Container">
            <p className="NavLink-Text">Promos</p>
            <div className="NavLink-Underline"></div>
          </li>

          <li className="NavLink-Container">
            <p className="NavLink-Text">Quiz</p>
            <div className="NavLink-Underline"></div>
          </li>
        </ul>

        <ul id="NavBar-RightSection">
          <li>Account</li>

          <li>
            <div id="basketContainer">
              <img id="basketIcon" src={basketIcong} alt="Italian Trulli" />
              <div id="basketCounter">1</div>
            </div>
          </li>
        </ul>
      </div>
      <div id="bufferTool">d</div>

    </>
  );
}

import React from "react";
import "./header.css";
import { TiLocation } from "react-icons/ti";
import { FaPhoneVolume } from "react-icons/fa6";
import "./index";
import logo from "../assets/logo.webp";
import halal from "../assets/halal.webp";
import { Link, Outlet } from "react-router-dom/dist";
import getStore from "../utils/getStore";
import { FaRegUser } from "react-icons/fa6";

export default function header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="header_list-first">
            <div className="logo">
              <Link to="/">
                <img src={logo} width="190" alt="logo" />
              </Link>
            </div>
            <div className="header_list-first_list">
              <TiLocation className="location_icon" />
              <div>
                <p>Shahar </p>
                <h2>
                  <select name="" id="">
                    <option value="">Toshkent</option>
                  </select>
                </h2>
              </div>
            </div>
            <div className="header_list-second_list">
              <div className="header_list-second_list_items1">
                <FaPhoneVolume className="phone_icon" />
                <p>1174</p>
              </div>
              <p>
                Yagona aloqa <br /> markazi
              </p>
            </div>
          </div>
          <div className="header_list-second">
            <div>
              <h2>24/7</h2>
              <p>Bepul yetkazish endi 24/7 mavjud</p>
            </div>
          </div>
          <div className="header_list-third">
            <div>
              <select name="" id="">
                <option value="">UZ</option>
                <option value="">RU</option>
              </select>
              <Link to="/halal">
                <img src={halal} width="70" alt="" />
              </Link>
              {getStore("user").length > 1 ? (
                <div className="dropdown dropdown-bottom account-father">
                  <label tabIndex={0} className="btn m-1 account-btn">
                    <FaRegUser className="user_icon" /> Profil
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 accaunt-ul"
                  >
                    <li>
                      <a className="exit_text">+998{getStore("user")}</a>
                    </li>
                    <li>
                      <a className="exit_text">Chiqish</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/register">
                  <button>Kirish</button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
